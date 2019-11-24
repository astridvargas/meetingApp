// Import sequelize for postgres
const sequelize = require('sequelize');

module.exports = new sequelize('limoni', '', '', {
    host: '127.0.0.1',
    port: 5433,
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    // define: {
    //     timeStamps: false
    // },
    // Stop displaying all the database information
    logging: false
});