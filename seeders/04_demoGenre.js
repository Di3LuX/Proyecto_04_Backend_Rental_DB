'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('genres', [
      { type: 'comedia', age: 3, createdAt: new Date(), updatedAt: new Date() },
      { type: 'drama', age: 12, createdAt: new Date(), updatedAt: new Date() },
      { type: 'accion', age: 16, createdAt: new Date(), updatedAt: new Date() },
      { type: 'terror', age: 18, createdAt: new Date(), updatedAt: new Date() },
      { type: 'scy-fi', age: 8, createdAt: new Date(), updatedAt: new Date() },
  ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('genres', null, {});

  }
};