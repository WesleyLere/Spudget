const userSeeds = require('../seeders/UserSeed.json');
const db = require('../config/connection');
const User = require ('../models/User');
const Category = require('../models/Category');
const categorySeeds = require('../seeders/categorySeeds');

db.once('open', async () => {
    try {
        await User.deleteMany();
        await Category.deleteMany();

        const purchase = await Category.insertMany(categorySeeds)
        console.log(purchase)
        console.log(userSeeds)
        userSeeds.forEach(userData => { //users data loop
            // console.log(userData)
            userData.transactions.forEach(transactionData => { //looping through transactions data
                console.log(transactionData.category)
                const c = transactionData.category 

                purchase.forEach(categoryData => { //looking for category data
                    if (c == categoryData.name) {
                        transactionData.category = categoryData._id
                    } 
                })
console.log(transactionData)
            }) 
        })
        console.log(userSeeds)
        await User.create(userSeeds)
    } catch (err) {
        console.error(err);
        process.exit(1);
      }
    
      console.log('all done!');
      process.exit(0);
});