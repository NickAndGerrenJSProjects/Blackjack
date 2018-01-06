'use strict';
module.exports = (sequelize, DataTypes) => {
  var usergamestate = sequelize.define('usergamestate', {
    playerfk: DataTypes.INTEGER,
    gamefk: DataTypes.INTEGER,
    handvalue: DataTypes.INTEGER,
    playermoney: DataTypes.INTEGER,
    pot: DataTypes.INTEGER,
    phase: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        usergamestate.belongsTo(models.users);
        usergamestate.belongsTo(models.game);
      }
    }
  });
  return usergamestate;
};