const sequelize = require('../db')
const {DataTypes} = require('sequelize')
const Role = sequelize.define('roles', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    category: {type: DataTypes.STRING, unique: true,},
})