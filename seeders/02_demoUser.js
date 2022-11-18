'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      { "name": "Diego", "username": "Di3LuX", "age": 28, "mail": "diego_w@hotmail.com", "pass": "1234", role_Id: 1, createdAt: new Date(), updatedAt: new Date() },
      { "name": "Aiam", "username": "Turok", "age": 25, "mail": "ian@yahoo.com", "pass": "1234", role_Id: 2, createdAt: new Date(), updatedAt: new Date() },
      { "name": "Duke", "username": "Nukem", "age": 30, "mail": "pepelin@trolet.com", "pass": "1234", role_Id: 2, createdAt: new Date(), updatedAt: new Date() },
      { "name": "Dexter", "username": "Phobos", "age": 33, "mail": "ereper@lian.com", "pass": "1234", role_Id: 2, createdAt: new Date(), updatedAt: new Date() },
      { "name": "Didi", "username": "Farchua", "age": 42, "mail": "ian.com", "pass": "1234", role_Id: 2, createdAt: new Date(), updatedAt: new Date() },
      { "name": "Desi", "username": "Olaso", "age": 25, "mail": "d.olaso@gmail.com", "pass": "1234", role_Id: 2, createdAt: new Date(), updatedAt: new Date() },
      { "name": "Optimus", "username": "Prime", "age": 21, "mail": "mamachanga@hotmail.com", "pass": "1234", role_Id: 2, createdAt: new Date(), updatedAt: new Date() },
      { "name": "Experimento", "username": "Xenomorpho", "age": 99, "mail": "nostromo@gmail.com", "pass": "1234", role_Id: 2, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('users', null, {});

  }
};