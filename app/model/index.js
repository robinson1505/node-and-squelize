const Sequelize = require("sequelize");
const sequelize = require("../config/db.config");
const UserModel = require("./user.model");
const PostModel = require("./post.model");

const User = UserModel(sequelize, Sequelize);
const Post = PostModel(sequelize, Sequelize);

User.hasMany(Post,{foreignKey:'userPosts'});
Post.belongsTo(User,{foreignKey:'userPosts'});

module.exports = {
  User,
  Post,
  sequelize,
};
