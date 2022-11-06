'use strict';

module.exports = {
//name,username,age,mail,pass,rol
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {"name":"Diego", "username": "Di3LuX", "age": 28, "email":"raquel@gmail.com","pass": "1234",  "rol": true, "createdAt":"2022-11-04","updatedAt":"2022-11-6"},
      {"name":"Aiam", "username": "Turok", "age": 25, "email":"jdepp30@trellian.com","pass": "1234", "rol": false, "createdAt":"2022-11-04","updatedAt":"2022-11-6"},
      {"name":"Duke", "username": "Nukem", "age": 30, "email":"margeBouvier0@trellian.com","pass": "1234", "rol": false, "createdAt":"2022-11-04","updatedAt":"2022-11-6"},
      {"name":"Dexter", "username": "Phobos", "age": 33, "email":"dexter50@trellian.com","pass": "1234", "rol": false,"createdAt":"2022-11-04","updatedAt":"2022-11-6"},
      {"name":"Didi", "username": "Farchua", "age": 42, "email":"bonnie0@trellian.com","pass": "1234", "rol": false,"createdAt":"2022-11-04","updatedAt":"2022-11-6"},
      {"name":"Desi", "username": "Olaso", "age": 25, "email":"laurel@trellian.com","pass": "1234", "rol": false,"createdAt":"2022-11-04","updatedAt":"2022-11-6"},
      {"name":"Optimus", "username": "Prime", "age": 21, "email":"milston0@trellian.com","pass": "1234", "rol": false,"createdAt":"2022-11-04","updatedAt":"2022-11-6"},
      {"name":"Experimento", "username": "Xenomorpho", "age": 99, "email":"connor@trellian.com","pass": "1234", "rol": false,"createdAt":"2022-11-04","updatedAt":"2022-11-6"}
  ],{});
},

  down: async (queryInterface, Sequelize) => {

  await queryInterface.bulkDelete('users', null, {});

}
};