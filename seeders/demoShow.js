'use strict';

module.exports = {
//name,username,synopsis,mail,genere,premiere
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('shows', [
      {"title":"Shin Chan", "rate": 10, "synopsis": "", "adult": true, "genere": "",  "premiere": true, "createdAt":"2022-11-04","updatedAt":"2022-11-6"},
      {"title":"Family Guy", "rate": 8, "synopsis": "", "adult": true, "genere": "", "premiere": false, "createdAt":"2022-11-04","updatedAt":"2022-11-6"},
      {"title":"The big bang theory", "rate": 7, "synopsis": "", "adult": true, "genere": "", "premiere": false, "createdAt":"2022-11-04","updatedAt":"2022-11-6"},
      {"title":"Simpsons", "rate": 9, "synopsis": "", "adult": false, "genere": "", "premiere": true,"createdAt":"2022-11-04","updatedAt":"2022-11-6"},
      {"title":"El laboratorio de Dexter", "rate": 10, "synopsis": "", "adult": false, "genere": "", "premiere": false,"createdAt":"2022-11-04","updatedAt":"2022-11-6"},
      {"title":"Vaca y pollo", "rate": 3, "synopsis": "", "adult": false ,"genere": "", "premiere": true,"createdAt":"2022-11-04","updatedAt":"2022-11-6"},
      {"title":"CatDog", "rate": 5, "synopsis": "", "adult": false ,"genere": "", "premiere": false,"createdAt":"2022-11-04","updatedAt":"2022-11-6"},
      {"title":"Poirot", "rate": 10, "synopsis": "", "adult": true ,"genere": "", "premiere": true,"createdAt":"2022-11-04","updatedAt":"2022-11-6"}
  ],{});
},

  down: async (queryInterface, Sequelize) => {

  await queryInterface.bulkDelete('shows', null, {});

}
};