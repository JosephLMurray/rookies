const sequelize = require('../config/connection');
const { Player } = require('../models');

// const teamData = require('./teamData.json');
const seedPlayers = require('./newPlayers');
const seedTeams = require('./teamData');
const seedUsers = require('./userData');

const singlePlayer = {
  PlayerID: 10000001,
  TeamID: 17,
  Team: 'DET',
  PositionCategory: 'P',
  Position: 'SP',
  FirstName: 'Chase',
  LastName: 'Anderson',
  BatHand: 'R',
  ThrowHand: 'R',
  Height: 73,
  Weight: 200,
  BirthCity: 'Wichita Falls',
  BirthState: 'TX',
  BirthCountry: 'USA',
  PhotoUrl:
    'https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10000001.png'
};

const seedAll = async () => {
  await sequelize.sync({ force: true });
  // await Player.create(singlePlayer);
  await seedUsers();
  await seedTeams();
  await seedPlayers();

  process.exit(0);
};

seedAll();
