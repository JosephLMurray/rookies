const sequelize = require('../config/connection');
const seedA = require('./aData');
const seedB = require('./bData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedA();

  await seedB();

  process.exit(0);
};

seedAll();
