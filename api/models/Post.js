const sequelize = require('../db')
const {DataTypes} = require('sequelize')
const User = sequelize.define('posts', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: true,},
    author: {type: DataTypes.STRING, unique: true,},
    description: {type: DataTypes.STRING},
    text: {type: DataTypes.STRING},
    date: {type: DataTypes.STRING},
})