const { DataTypes, Sequelize } = require("sequelize");
const db = require("../database/database");

const Language = db.define('languages', {
    id: {
        type: DataTypes.TINYINT,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    programmers: {
        type: DataTypes.TINYINT
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
    }
})

module.exports = Language