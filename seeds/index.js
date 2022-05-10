const sequelize = require('../config/connection');
<<<<<<< HEAD
const seedA = require('./aData');
const seedB = require('./bData');
=======

// const teamData = require('./teamData.json');
const seedPlayers = require('./newPlayers');
const seedTeams = require('./teamData');
>>>>>>> d66d50f4c641b6502a29791bab57b9af7eef2127

const seedAll = async () => {
  await sequelize.sync({ force: true });

<<<<<<< HEAD
  await seedA();

  await seedB();
=======
  await seedPlayers();

  await seedTeams();
>>>>>>> d66d50f4c641b6502a29791bab57b9af7eef2127

  process.exit(0);
};

seedAll();
