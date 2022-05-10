const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Player extends Model {}

Player.init(
  {
    PlayerID: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    TeamID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Team',
        key: 'TeamID'
      }
    },
    Team: {
      type: DataTypes.STRING
    },
    PositionCategory: {
      type: DataTypes.STRING
    },
    Position: {
      type: DataTypes.STRING
    },
    FirstName: {
      type: DataTypes.STRING
    },
    LastName: {
      type: DataTypes.STRING
    },
    BatHand: {
      type: DataTypes.STRING
    },
    ThrowHand: {
      type: DataTypes.STRING
    },
    Height: {
      type: DataTypes.INTEGER
    },
    Weight: {
      type: DataTypes.INTEGER
    },
    BirthCity: {
      type: DataTypes.STRING
    },
    BirthState: {
      type: DataTypes.STRING
    },
    BirthCountry: {
      type: DataTypes.STRING
    },
    PhotoUrl: {
      type: DataTypes.STRING
    },
    rosterID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Roster',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'player'
  }
);

module.exports = Player;
