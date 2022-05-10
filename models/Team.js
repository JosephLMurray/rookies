const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Team extends Model {}

Team.init(
  {
    TeamID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Key: {
      type: DataTypes.STRING
    },
    City: {
      type: DataTypes.STRING
    },
    Name: {
      type: DataTypes.STRING
    },
    League: {
      type: DataTypes.STRING
    },
    Division: {
      type: DataTypes.STRING
    },
    PrimaryColor: {
      type: DataTypes.STRING
    },
    SecondaryColor: {
      type: DataTypes.STRING
    },
    TertiaryColor: {
      type: DataTypes.STRING
    },
    QuarternaryColor: {
      type: DataTypes.STRING
    },
    WikipediaLogoUrl: {
      type: DataTypes.STRING
    },
    WikipediaWordMarkUrl: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'team'
  }
);

module.exports = Team;
