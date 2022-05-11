const { Roster } = require('../models');

const teamData = [
  {
    rosterID: 1,
    userID: 1,
    name: 'Bombers'
  },
  {
    rosterID: 2,
    userID: 2,
    name: 'Rookies'
  },
  {
    rosterID: 3,
    userID: 3,
    name: 'Stinkers'
  }
];

const seedRosters = () => Roster.bulkCreate(teamData);

module.exports = seedRosters;
