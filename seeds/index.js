const sequelize = require('../config/connection');

// const teamData = require('./teamData.json');
const seedPlayers = require('./newPlayers');
const seedTeams = require('./teamData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedPlayers();

  await seedTeams();

  process.exit(0);
};

seedAll();
