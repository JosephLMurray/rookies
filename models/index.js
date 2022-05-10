const User = require('./User');
const Player = require('./Player');
const Roster = require('./Roster');
const Team = require('./Team');

Roster.belongsTo(User, {
  foreignKey: 'userID'
});

// Player.belongsTo(Team, {
//   foreignKey: 'TeamID'
// });

// Team.hasMany(Player, {
//   foreignKey: 'TeamID',
//   onDelete: 'CASCADE'
// });

User.hasMany(Roster, {
  foreignKey: 'userID',
  onDelete: 'CASCADE'
});

Player.belongsToMany(Roster, {
  through: 'PlayerRoster'
});

module.exports = { User, Player, Roster, Team };
