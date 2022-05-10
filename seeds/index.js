const sequelize = require('../config/connection');

// const teamData = require('./teamData.json');
const seedPlayers = require('./newPlayers');
const seedTeams = require('./teamData');
const seedUsers = require('./userData')

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedTeams();

  await seedPlayers();

  process.exit(0);
};

seedAll();
