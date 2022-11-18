'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('categories', [
      { type: 'comedia', age: 21, createdAt: new Date(), updatedAt: new Date() },
      { type: 'drama', age: 16, createdAt: new Date(), updatedAt: new Date() },
      { type: 'accion', age: 21, createdAt: new Date(), updatedAt: new Date() },
      { type: 'terror', age: 12, createdAt: new Date(), updatedAt: new Date() },
      { type: 'scy-fi', age: 8, createdAt: new Date(), updatedAt: new Date() },
  ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('categories', null, {});

  }
};