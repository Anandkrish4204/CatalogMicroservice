const Sequelize = require('sequelize').Sequelize;

const sequelize = new Sequelize(process.env.MYSQL_SCHEMA,process.env.MYSQL_USERNAME,process.env.MYSQL_PASSWORD,{
    dialect : 'mysql',
    host : process.env.SQL_DB_HOST
    //host : 'localhost'
});

module.exports = sequelize;
