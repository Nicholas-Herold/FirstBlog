const sequelize = require('../config/connection');
const {User} = require('../models');

const userInfo = require('./userInfo.json');

const seedDB = async () => {
    await sequelize.sync({force:true});
    
    const user = await User.bulkCreate(userInfo,{
        individualHooks: true,
        returning: true
    });

    process.exit(0);
}

seedDB();
