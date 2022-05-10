const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Roster extends Model {}

Roster.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    userID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    playerID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Player',
        key: 'PlayerID'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'roster'
  }
);

module.exports = Roster;
