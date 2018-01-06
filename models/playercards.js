'use strict';
module.exports = (sequelize, DataTypes) => {
  var playercards = sequelize.define('playercards', {
    gamefk: DataTypes.INTEGER,
    gamestatefk: DataTypes.INTEGER,
    cardsfk: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        playercards.belongsTo(models.game);
        playercards.belongsTo(models.deck);
      }
    }
  });
  return playercards;
};