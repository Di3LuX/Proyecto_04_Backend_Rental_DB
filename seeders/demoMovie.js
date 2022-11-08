'use strict';

module.exports = {
//name,username,synopsis,mail,genere,premiere
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('shows', [
      {"title":"Shin Chan", "rate": 10, "synopsis": "", "adult": true, "genere": "",  "premiere": true, "createdAt":"2022-11-04","updatedAt":"2022-11-06"},
      {"title":"Predator", "rate": 8, "synopsis": "", "adult": true, "genere": "", "premiere": false, "createdAt":"2022-11-04","updatedAt":"2022-11-06"},
      {"title":"Alien", "rate": 7, "synopsis": "", "adult": true, "genere": "", "premiere": false, "createdAt":"2022-11-04","updatedAt":"2022-11-06"},
      {"title":"Scary Movie", "rate": 9, "synopsis": "", "adult": false, "genere": "", "premiere": true,"createdAt":"2022-11-04","updatedAt":"2022-11-06"},
      {"title":"Kill Bill", "rate": 10, "synopsis": "", "adult": true, "genere": "", "premiere": false,"createdAt":"2022-11-04","updatedAt":"2022-11-06"},
      {"title":"Star Wars", "rate": 9, "synopsis": "", "adult": false ,"genere": "", "premiere": true,"createdAt":"2022-11-04","updatedAt":"2022-11-06"},
      {"title":"Bebe Jefazo", "rate": 5, "synopsis": "", "adult": false ,"genere": "", "premiere": false,"createdAt":"2022-11-04","updatedAt":"2022-11-06"},
      {"title":"300", "rate": 10, "synopsis": "", "adult": true ,"genere": "", "premiere": true,"createdAt":"2022-11-04","updatedAt":"2022-11-06"}
  ],{});
},

  down: async (queryInterface, Sequelize) => {

  await queryInterface.bulkDelete('shows', null, {});

}
};