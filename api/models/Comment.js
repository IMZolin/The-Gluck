const sequelize = require('../db')
const {DataTypes} = require('sequelize')
const Comment = sequelize.define('comments', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    author: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})