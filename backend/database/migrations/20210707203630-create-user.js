'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      pay_number: {
        type: Sequelize.STRING
      },
      pay_exp_month: {
        type: Sequelize.STRING
      },
      pay_exp_year: {
        type: Sequelize.STRING
      },
      cvv: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      add_line_1: {
        type: Sequelize.STRING
      },
      add_line_2: {
        type: Sequelize.STRING
      },
      add_city: {
        type: Sequelize.STRING
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};