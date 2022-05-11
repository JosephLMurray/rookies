const { Roster } = require('../models');

const rosterData = [
  {
    rosterID: 1,
    userID: 1,
    name: 'Bombers'
  },
  {
    rosterID: 2,
    userID: 2,
    name: 'Stinkers'
  },
  {
    rosterID: 3,
    userID: 3,
    name: 'Rookies'
  }
];

const seedRoster = () => Roster.bulkCreate(rosterData);

module.exports = seedRoster;
