const sequelize = require('../config/connection');


const seedA = require('./aData');
const seedB = require('./bData');


const { Player } = require('../models');


// const teamData = require('./teamData.json');
const seedPlayers = require('./newPlayers');
const seedTeams = require('./teamData');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  await seedTeams();
  await seedPlayers();


  process.exit(0);
};

seedAll();
