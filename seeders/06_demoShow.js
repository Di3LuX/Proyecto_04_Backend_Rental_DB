'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('shows', [
      { "title": "Shin Chan", "rate": 10, "synopsis": "", "adult": true, genre_id: 1, "premiere": true, createdAt: new Date(), updatedAt: new Date() },
      { "title": "Family Guy", "rate": 8, "synopsis": "", "adult": true, genre_id: 1, "premiere": false, createdAt: new Date(), updatedAt: new Date() },
      { "title": "The big bang theory", "rate": 7, "synopsis": "", "adult": true, genre_id: 1, "premiere": false, createdAt: new Date(), updatedAt: new Date() },
      { "title": "Simpsons", "rate": 9, "synopsis": "", "adult": false, genre_id: 1, "premiere": true, createdAt: new Date(), updatedAt: new Date() },
      { "title": "El laboratorio de Dexter", "rate": 10, "synopsis": "", "adult": false, genre_id: 1, "premiere": false, createdAt: new Date(), updatedAt: new Date() },
      { "title": "Vaca y pollo", "rate": 3, "synopsis": "", "adult": false, genre_id: 1, "premiere": true, createdAt: new Date(), updatedAt: new Date() },
      { "title": "CatDog", "rate": 5, "synopsis": "", "adult": false, genre_id: 1, "premiere": false, createdAt: new Date(), updatedAt: new Date() },
      { "title": "Poirot", "rate": 10, "synopsis": "", "adult": true, genre_id: 1, "premiere": true, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('shows', null, {});

  }
};