'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('deck', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pipvalue: {
        type: Sequelize.INTEGER
      },
      pipface: {
        type: Sequelize.TEXT
      },
      pipsuit:{
        type: Sequelize.TEXT
      },
      image: {
        type: Sequelize.TEXT
      },
      imageBack:{
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('deck');
  }
};