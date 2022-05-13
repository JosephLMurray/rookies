const sequelize = require('../config/connection');

const seedRoster = require('./rosterData');
const seedPlayers = require('./playerData');
const seedTeams = require('./teamData');
const seedUsers = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedTeams();

  await seedPlayers();

  await seedRoster();

  process.exit(0);
};

seedAll();
