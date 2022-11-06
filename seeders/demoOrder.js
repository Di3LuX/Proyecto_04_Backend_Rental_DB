'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('orders', [
    {"movieId": 1,"userId":1, "rentingDate": "2022-11-10", "returnDate": "2022-12-10", "createdAt":"2022-11-05","updatedAt":"2022-11-06"},
    {"movieId": 3,"userId":1, "rentingDate": "2022-11-10", "returnDate": "2022-12-10", "createdAt":"2022-11-05","updatedAt":"2022-11-06"},
    {"movieId": 2,"userId":2, "rentingDate": "2022-11-10", "returnDate": "2022-12-10", "createdAt":"2022-11-05","updatedAt":"2022-11-06"},
    {"movieId": 4,"userId":3, "rentingDate": "2022-11-10", "returnDate": "2022-12-10", "createdAt":"2022-11-05","updatedAt":"2022-11-06"},
    {"movieId": 5,"userId":4, "rentingDate": "2022-11-10", "returnDate": "2022-12-10", "createdAt":"2022-11-05","updatedAt":"2022-11-06"},
    {"movieId": 6,"userId":5, "rentingDate": "2022-11-10", "returnDate": "2022-12-10", "createdAt":"2022-11-05","updatedAt":"2022-11-06"},
    {"movieId": 7,"userId":5, "rentingDate": "2022-11-10", "returnDate": "2022-12-10", "createdAt":"2022-11-05","updatedAt":"2022-11-06"},
    {"movieId": 8,"userId":8, "rentingDate": "2022-11-10", "returnDate": "2022-12-10", "createdAt":"2022-11-05","updatedAt":"2022-11-06"},
    {"movieId": 9,"userId":5, "rentingDate": "2022-11-10", "returnDate": "2022-12-10", "createdAt":"2022-11-05","updatedAt":"2022-11-06"},
    {"movieId": 10,"userId":10, "rentingDate": "2022-11-10", "returnDate": "2022-12-10", "createdAt":"2022-11-05","updatedAt":"2022-11-06"},
    {"movieId": 11,"userId":5, "rentingDate": "2022-11-10", "returnDate": "2022-12-10", "createdAt":"2022-11-05","updatedAt":"2022-11-06"}
  ],{});
},

  down: async (queryInterface, Sequelize) => {

  await queryInterface.bulkDelete('orders', null, {});

}
};

