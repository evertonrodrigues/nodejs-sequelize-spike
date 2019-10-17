"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("users", "age", Sequelize.INTEGER, {
      after: "name"
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("users", "age");
  }
};
