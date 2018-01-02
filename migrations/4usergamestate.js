'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('usergamestate', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      playerfk: {
        type: Sequelize.INTEGER,
        references: {
          model:'users',
          key:'id'
        }
      },
      gamefk: {
        type: Sequelize.INTEGER,
        references:{
          model:'game',
          key:'id'
        }
      },
      handvalue: {
        type: Sequelize.INTEGER
      },
      playermoney: {
        type: Sequelize.INTEGER
      },
      pot: {
        type: Sequelize.INTEGER
      },
      phase: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('usergamestate');
  }
};