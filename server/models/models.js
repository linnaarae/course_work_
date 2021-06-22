const sequelize = require('./db')
const { DataTypes } = require('sequelize')
const { _attributes } = require('../db')


const User = sequelize.define(modelName: 'user', attributes: {
    id_user: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    login: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING, unique: true },
    name: { type: DataTypes.STRING },
    surname: { type: DataTypes.STRING },
    sex: { type: DataTypes.STRING },
    age: { type: DataTypes.STRING },
})

const Author = sequelize.define(modelName: 'author', attributes: {
    id_author: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    login: { type: DataTypes.STRING },
    name: { type: DataTypes.STRING },
    surname: { type: DataTypes.STRING },
})

const Position = sequelize.define(modelName: 'position', attributes: {
    id_user: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    position: { type: DataTypes.STRING },
})

const Comments = sequelize.define(modelName: 'comments', attributes: {
    id_author: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_comment: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_news: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_event: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const News = sequelize.define(modelName: 'news', attributes: {
    id_news: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    date_news: { type: DataTypes.INTEGER },
    title: { type: DataTypes.STRING },
    id_author: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const Events = sequelize.define(modelName: 'events', attributes: {
    id_event: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    date_event: { type: DataTypes.INTEGER },
    title: { type: DataTypes.STRING },
    team: { type: DataTypes.STRING },
    place: { type: DataTypes.STRING },
    time: { type: DataTypes.INTEGER },
    id_author: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

Comments.hasOne(Author)
Author.belongsTo(Comments)

Comments.hasOne(Events)
Events.belongsTo(Comments)

Comments.hasOne(News)
News.belongsTo(Comments)

Position.hasOne(User)
User.belongsTo(Position)

Comments.hasOne(News)
News.belongsTo(Comments)

Author.hasMany(News)
News.belongsTo(Author)

Author.hasMany(Events)
Events.belongsTo(Author)