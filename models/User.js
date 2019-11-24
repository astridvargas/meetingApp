const sequelize = require('sequelize');
const db = require('../config/db');
const bcrypt = require ('bcrypt-nodejs');

const users = db.define('Users', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: sequelize.STRING(80),
    image: sequelize.STRING(40),
    email: {
        type: sequelize.STRING(30),
        allowNull: false,
        validate: {
                isEmail: { msg: 'Invalid email. Please try again' }
            },
        unique: {
            args: true,
            msg: "Registered user"
        }
    },
    password: {
        type: sequelize.STRING(20),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Please add your password"
            }
        }
    },
    active: {
        type: sequelize.INTEGER,
        defaultValue: 0
    },
    tokenPassword: sequelize.STRING,
    expirationToken: sequelize.DATE
}, {
    hooks: {
        beforeCreate(user) {
            user.password = users.prototype.hashPassword(user.password);
        }
    }
});

// Compared the passwords (authentication)
users.prototype.validatePassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}

users.prototype.hashPassword = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
}

module.exports = users;