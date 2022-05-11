const sequelize = require('../config/connection');

const seedPlayers = require('./newPlayers');
const seedTeams = require('./teamData');
const seedRosters = require('./rosterData');
const seedUsers = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedTeams();

  await seedPlayers();

  await seedRosters();

  process.exit(0);
};

seedAll();
