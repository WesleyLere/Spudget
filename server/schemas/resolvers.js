const { AuthenticationError } = require('apollo-server-express');
const { User, Category, transactionSchema, Limit } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'transactions',
          populate: 'category'
        }).
        populate('limits');

        // user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },

    transactionByMonth: async (parent, {month}, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id)
        const transactions = user.transactions.filter((trasaction) => {
          return trasaction.month === month
        })
        console.log(transactions)
        // const transactions = await user.transactions.aggregate([
        //   { $match: { month: month } },
        //   { $sort: { date: 1 } },
        // ]);

        return transactions;
      }

      throw new AuthenticationError('Not logged in');
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    addTransaction: async (parent, {date, month, year, amount, vendor, category}, context) => {
      if(context.user) {
      // Find the category by name
      let transactionCategory = await Category.findOne({ name: category });
      
      // If the category doesn't exist, create a new one
      if (!transactionCategory) {
        transactionCategory = new Category({ name: category });
        await transactionCategory.save();
      }

      // Create the new transaction object
      const newTransaction = {
        date, 
        month,
        year,
        amount,
        vendor,
        category: transactionCategory,
      };

      // Find the user and add the new transaction to their transactions array
      const user = await User.findByIdAndUpdate(userId, { $push: { transactions: newTransaction } }, {new: true});

      return user;
      }

      throw new AuthenticationError('Not logged in');
    },

    addLimit: async (parent, {month, year, amount, userId}, context) => {
      if (context.user) {
          // Find the user
        const user = await User.findById(userId);
        if (!user) {
          throw new Error(`User with ID ${userId} not found`);
        }

        // Create the new limit object
        const newLimit = new Limit({
            month,
            year,
            amount,
          }
        ) 

        // Add the new limit to the user's limits array
        user.limits.push(newLimit);
        await user.save();

        return user;
      }
      
      throw new AuthenticationError('Not logged in');
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;

