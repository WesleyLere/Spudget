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
        // Find User
        const user = await User.findById(context.user._id).populate('limits');
        // const user = await User.findById(userId).populate("limits");
        
        const limit = user.limits.length === 0 ? 0 : user.limits[0].amount;
        // Save transactions that match "month" into transactions
        const transactions = user.transactions.filter((transaction) => {
          return transaction.month === month;
        });
        
        if (transactions.length === 0) {
          return {
            dailySpending: [],
            accumulativeSpending: [],
            monthlyTotal: 0,
            limit: limit
          }
        }
        
        // days in the "month"
        const monthDays = new Date(user.transactions[0].year, month, 0).getDate();
        const dailySpending = [];
        const accumulativeSpending = [];
        
        let accumulativeTotal = 0;
        // Caculate daily spending, accumulative spedning by day, and total spending
        for (let i = 1; i <= monthDays; i++) {
          const dailyTransactions = transactions.filter((transaction) => {
            return transaction.date === i;
          });
    
          const dailyTotal = dailyTransactions.reduce((acc, transaction) => {
            return acc + transaction.amount;
          }, 0);
    
          accumulativeTotal += dailyTotal;
    
          dailySpending.push({ date: i, amount: dailyTotal });
          accumulativeSpending.push({date: i, amount: accumulativeTotal});
        }
        
        // Sort in ascending order of date
        dailySpending.sort((a, b) => a.date - b.date);

        return {
          dailySpending,
          accumulativeSpending,
          monthlyTotal: accumulativeTotal,
          limit
        };
      
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
      const user = await User.findByIdAndUpdate(context.user._id, { $push: { transactions: newTransaction } }, {new: true});

      return user;
      }

      // throw new AuthenticationError('Not logged in');
    },

    addLimit: async (parent, { amount}, context) => {
      if (context.user) {
          // Find the user
        const user = await User.findById(context.user._id);
        
        // Create the new limit object
        const newLimit = await Limit.create({
           
            amount,
          }
        )

        // Add the new limit to the user's limits array
        user.limits.pop()
        user.limits.push(newLimit._id);
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

