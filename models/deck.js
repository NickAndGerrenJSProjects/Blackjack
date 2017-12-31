'use strict';
module.exports = (sequelize, DataTypes) => {
  var deck = sequelize.define('deck', {
    pipvalue: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return deck;
};