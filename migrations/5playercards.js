'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('playercards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      gamefk: {
        type: Sequelize.INTEGER,
        references:{
          model:'game',
          key:'id'
        }
      },
      gamestatefk: {
        type: Sequelize.INTEGER,
        references:{
          model:'usergamestate',
          key:'id'
        }
      },
      cardsfk: {
        type: Sequelize.INTEGER,
        references:{
          model:'deck',
          key:'id'
        }
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
    return queryInterface.dropTable('playercards');
  }
};