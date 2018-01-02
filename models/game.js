'use strict';
module.exports = (sequelize, DataTypes) => {
  var game = sequelize.define('game', {
    playersfk: DataTypes.INTEGER,
    dealerfk: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        game.belongsTo(models.dealer);
        game.belongsTo(models.users);
      }
    }
  });
  return game;
};