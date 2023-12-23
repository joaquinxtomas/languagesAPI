const { Sequelize } = require('sequelize');
import {config} from "dotenv"

config()

const db = new Sequelize(process.env.DATABASE, process.env.USER, "", {
    host: process.env.HOST,
    dialect: 'mysql',
  });


module.exports = db;
