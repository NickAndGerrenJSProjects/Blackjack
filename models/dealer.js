'use strict';
module.exports = (sequelize, DataTypes) => {
  var dealer = sequelize.define('dealer', {
    cardsfk: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        dealer.belongsTo(models.deck);
      }
    }
  });
  return dealer;
};