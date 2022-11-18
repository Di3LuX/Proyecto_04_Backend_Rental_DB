'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('shows', [
      { "title": "Shin Chan", "rate": 10, "synopsis": "", "adult": true, genre_Id: 1, "premiere": true, createdAt: new Date(), updatedAt: new Date() },
      { "title": "Predator", "rate": 8, "synopsis": "", "adult": true, genre_Id: 5, "premiere": false, createdAt: new Date(), updatedAt: new Date() },
      { "title": "Alien", "rate": 7, "synopsis": "", "adult": true, genre_Id: 5, "premiere": false, createdAt: new Date(), updatedAt: new Date() },
      { "title": "Scary Movie", "rate": 9, "synopsis": "", "adult": false, genre_Id: 1, "premiere": true, createdAt: new Date(), updatedAt: new Date() },
      { "title": "Kill Bill", "rate": 10, "synopsis": "", "adult": true, genre_Id: 3, "premiere": false, createdAt: new Date(), updatedAt: new Date() },
      { "title": "Star Wars", "rate": 9, "synopsis": "", "adult": false, genre_Id: 5, "premiere": true, createdAt: new Date(), updatedAt: new Date() },
      { "title": "Bebe Jefazo", "rate": 5, "synopsis": "", "adult": false, genre_Id: 3, "premiere": false, createdAt: new Date(), updatedAt: new Date() },
      { "title": "300", "rate": 10, "synopsis": "", "adult": true, genre_Id: 3, "premiere": true, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('shows', null, {});

  }
};