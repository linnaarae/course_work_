const sequelize = require('../db')
const { DataTypes } = require('sequelize')


const User = sequelize.define('user', {
    id_user: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    login: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING, unique: true },
    name: { type: DataTypes.STRING },
    surname: { type: DataTypes.STRING },
    sex: { type: DataTypes.STRING },
    age: { type: DataTypes.STRING },
})

const Author = sequelize.define('author', {
    id_author: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nick: { type: DataTypes.STRING },
})

const Moderator = sequelize.define('moderator', {
    id_user: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nick: { type: DataTypes.STRING },
})

const Comment = sequelize.define('comment', {
    id_comment: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    text: { type: DataTypes.STRING, allowNull: false },
})

const News = sequelize.define('news', {
    id_news: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    date_news: { type: DataTypes.INTEGER },
    title: { type: DataTypes.STRING },

})

const Events = sequelize.define('events', {
    id_event: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    date_event: { type: DataTypes.INTEGER },
    title: { type: DataTypes.STRING },
    team: { type: DataTypes.STRING },
    place: { type: DataTypes.STRING },
    time: { type: DataTypes.INTEGER },
})

Comment.hasOne(Author)
Author.belongsTo(Comment)

Comment.hasOne(Events)
Events.belongsTo(Comment)

Comment.hasOne(News)
News.belongsTo(Comment)

User.hasOne(Author)
Author.belongsTo(User)

Moderator.hasOne(User)
User.belongsTo(Moderator)

Comment.hasOne(News)
News.belongsTo(Comment)

Author.hasMany(News)
News.belongsTo(Author)

Author.hasMany(Events)
Events.belongsTo(Author)

module.exports = {
    News,
    Events,
    Author,
    User,
    Comment,
    Moderator
}