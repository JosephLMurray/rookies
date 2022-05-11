const User = require('./User');
const Player = require('./Player');
const Roster = require('./Roster');
const Team = require('./Team');

Team.hasMany(Player, {
  foreignKey: 'TeamID',
  onDelete: 'CASCADE'
});

User.hasMany(Roster, {
  foreignKey: 'userID'
});

Player.belongsToMany(Roster, {
  through: 'playerroster'
});

Roster.belongsToMany(Player, {
  through: 'playerroster'
});

module.exports = { User, Player, Roster, Team };
