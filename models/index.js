const User = require('./User');
const Player = require('./Player');
const Roster = require('./Roster');
const Team = require('./Team');

Roster.belongsTo(User, {
  foreignKey: 'userID'
});

User.hasMany(Roster, {
  foreignKey: 'userID',
  onDelete: 'CASCADE'
});

Player.belongsToMany(Roster, {
  through: 'playerroster'
});

Roster.belongsToMany(Player, {
  through: 'playerroster'
});

module.exports = { User, Player, Roster, Team };
