'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'Pizzas',
      [
        {
          imageUrl:
            'https://media.dodostatic.net/image/r:292x292/11EE7D610A62D78598406363A9A8AD65.avif',
          title: 'Пепперони Фреш с перцем',
          price: 803,
          rating: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
          title: 'Сырная',
          price: 245,
          rating: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            'https://media.dodostatic.net/image/r:292x292/11EE7D6110059795842D40396BCF1E73.avif',
          title: 'Цыпленок барбекю',
          price: 295,
          rating: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            'https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif',
          title: 'Кисло-сладкий цыпленок',
          price: 275,
          rating: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            'https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif',
          title: 'Чизбургер-пицца',
          price: 415,
          rating: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            'https://media.dodostatic.net/image/r:292x292/11EE7D6122BB3424B593BB15EACE3197.avif',
          title: 'Крэйзи пепперони',
          price: 580,
          rating: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            'https://media.dodostatic.net/image/r:292x292/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
          title: 'Пепперони',
          price: 675,
          rating: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            'https://media.dodostatic.net/image/r:292x292/11EE7D6105EF6690B86FBDE6150B5B0C.avif',
          title: 'Маргарита',
          price: 450,
          rating: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            'https://media.dodostatic.net/image/r:292x292/11EE7D611ADF5AAD898B8B651186E023.avif',
          title: 'Четыре сезона',
          price: 395,
          rating: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            'https://media.dodostatic.net/image/r:292x292/11EE7D61546D8483A61A0BBAA7ADCC78.avif',
          title: 'Овощи и грибы 🌱',
          price: 285,
          rating: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
