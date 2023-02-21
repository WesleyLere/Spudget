const casual = require('casual');
const db = require('../config/connection');
const {User, Category, Limit} = require ('../models');

const categories = [
    "toll",
    "food",
    "parking",
    "transport",
    "accommodation",
    "gasoline",
    "telecom",
    "miscellaneous"
  ];

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async () => {

    try {
        console.log('Connected to database');

        // Clear the database
        await User.deleteMany({});
        await Category.deleteMany({});
        await Limit.deleteMany({});

        console.log('Database cleared');

        // Create the categories
        const categoryDocs = categories.map((category) => ({ name: category }));
        const createdCategories = await Category.insertMany(categoryDocs);

        const password = casual.password;
          // Create the user
        const user = await User.create({
            username: casual.username,
            email: casual.email,
            password: password,
        });
        console.log(`The user, ${user.username}, has this EMAIL:`, user.email);
        console.log('With this PASSWORD:', password);
        
        for (let i = 0; i < 50; i++) {
            const randomDate = casual.integer(1, 31);
            // const randomMonth = casual.integer(1, 2);
            const randomAmount = Number(casual.double(1, 1000).toFixed(2));
            const randomVendor = casual.company_name;
            const randomCategoryIndex = casual.integer(0, 7);

            const transaction = {
            date: randomDate,
            month: 1,
            year: 2023,
            amount: randomAmount,
            vendor: randomVendor,
            category: createdCategories[randomCategoryIndex]._id,
            };

            user.transactions.push(transaction);
        }

        const createdLimit = await Limit.create({
            amount: casual.integer(3000, 4000),
        })

        user.limits.push(createdLimit._id);

        await user.save();

    } catch (err) {
        console.error(err);
        process.exit(1);
    }

    console.log('all done!');
    process.exit(0);
});