'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      { "name": "Diego", "username": "Di3LuX", "age": 28, "email": "diego_w@hotmail.com", "pass": "1234", roleId: 1, createdAt: new Date(), updatedAt: new Date() },
      { "name": "Aiam", "username": "Turok", "age": 25, "email": "ian@yahoo.com", "pass": "1234", roleId: 2, createdAt: new Date(), updatedAt: new Date() },
      { "name": "Duke", "username": "Nukem", "age": 30, "email": "pepelin@trolet.com", "pass": "1234", roleId: 2, createdAt: new Date(), updatedAt: new Date() },
      { "name": "Dexter", "username": "Phobos", "age": 33, "email": "ereper@lian.com", "pass": "1234", roleId: 2, createdAt: new Date(), updatedAt: new Date() },
      { "name": "Didi", "username": "Farchua", "age": 42, "email": "ian.com", "pass": "1234", roleId: 2, createdAt: new Date(), updatedAt: new Date() },
      { "name": "Desi", "username": "Olaso", "age": 25, "email": "d.olaso@gmail.com", "pass": "1234", roleId: 2, createdAt: new Date(), updatedAt: new Date() },
      { "name": "Optimus", "username": "Prime", "age": 21, "email": "mamachanga@hotmail.com", "pass": "1234", roleId: 2, createdAt: new Date(), updatedAt: new Date() },
      { "name": "Experimento", "username": "Xenomorpho", "age": 99, "email": "nostromo@gmail.com", "pass": "1234", roleId: 2, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('users', null, {});

  }
};