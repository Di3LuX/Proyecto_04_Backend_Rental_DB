'use strict';

module.exports = {
//name,username,age,mail,pass,rol
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {"name":"Diego", "username": "Di3LuX", "age": 28, "email":"diego_w@hotmail.com","pass": "1234",  "rol": true, "createdAt":"2022-11-04","updatedAt":"2022-11-6"},
      {"name":"Aiam", "username": "Turok", "age": 25, "email":"ian@yahoo.com","pass": "1234", "rol": false, "createdAt":"2022-11-04","updatedAt":"2022-11-6"},
      {"name":"Duke", "username": "Nukem", "age": 30, "email":"pepelin@trolet.com","pass": "1234", "rol": false, "createdAt":"2022-11-04","updatedAt":"2022-11-6"},
      {"name":"Dexter", "username": "Phobos", "age": 33, "email":"ereper@lian.com","pass": "1234", "rol": false,"createdAt":"2022-11-04","updatedAt":"2022-11-6"},
      {"name":"Didi", "username": "Farchua", "age": 42, "email":"ian.com","pass": "1234", "rol": false,"createdAt":"2022-11-04","updatedAt":"2022-11-6"},
      {"name":"Desi", "username": "Olaso", "age": 25, "email":"d.olaso@gmail.com","pass": "1234", "rol": false,"createdAt":"2022-11-04","updatedAt":"2022-11-6"},
      {"name":"Optimus", "username": "Prime", "age": 21, "email":"mamachanga@hotmail.com","pass": "1234", "rol": false,"createdAt":"2022-11-04","updatedAt":"2022-11-6"},
      {"name":"Experimento", "username": "Xenomorpho", "age": 99, "email":"nostromo@gmail.com","pass": "1234", "rol": false,"createdAt":"2022-11-04","updatedAt":"2022-11-6"}
  ],{});
},

  down: async (queryInterface, Sequelize) => {

  await queryInterface.bulkDelete('users', null, {});

}
};