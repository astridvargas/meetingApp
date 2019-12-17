const Sequelize = require('sequelize');
const db = require('../config/db');
const uuid = require('uuid/v4');
const User = require('./User')

const Groups = db.define('groups', {
    id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: uuid()
    },
    name: {
        type: Sequelize.TEXT(100),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'The group needs to have a name'
            }
        }
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Add a group description'
            }
        }
    },
    
    image: Sequelize.TEXT
})

Groups.belongsTo(User);

module.exports = Groups;