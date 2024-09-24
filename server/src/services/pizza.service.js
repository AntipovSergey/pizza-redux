const models = require('../../db/models');

class PizzaService {
  #models;

  constructor(dbModels) {
    this.#models = dbModels;
  }

  getPizzas() {
    return this.#models.Pizza.findAll({ order: [['id', 'ASC']] });
  }

  getOnePizza(id) {
    return this.#models.Pizza.findByPk(id)
  }

  addPizza(data) {
    return this.#models.Pizza.create(data);
  }

  deletePizza(id) {
    return this.#models.Pizza.destroy({ where: { id } });
  }

  editPizza(id, data) {
    this.#models.Pizza.update(data, { where: { id } });
    return this.#models.Pizza.findByPk(id);
  }
}

const pizzaService = new PizzaService(models);
module.exports = pizzaService;
