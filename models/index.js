const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Exchange = require('./Exchange');

Post.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});

Exchange.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Exchange.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

module.exports = {
  User,
  Comment,
  Post,
  Exchange
};