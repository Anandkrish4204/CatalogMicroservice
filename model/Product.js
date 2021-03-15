const Sequelize = require('sequelize');
const sequelize = require('../util/mySqldb');

const Catalog = sequelize.define('Product_Catalog',{
    productId:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull : false,
        primaryKey: true
    },
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    price:{
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    imageUrl: Sequelize.STRING,
    desc:{
        type: Sequelize.STRING,
        allowNull: false
    },
    category:{
        type: Sequelize.STRING,
        allowNull: false
    }

});

module.exports = Catalog;