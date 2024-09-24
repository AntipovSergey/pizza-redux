const pizzasRouter = require('express').Router();
const pizzaService = require('../services/pizza.service');

pizzasRouter.route('/').get(async (req, res) => {
  try {
    const allPizzas = await pizzaService.getPizzas();
    res.status(200).json(allPizzas);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

pizzasRouter.route('/').post(async (req, res) => {
  try {
    const data = req.body;
    const newPizza = await pizzaService.addPizza(data);
    res.status(201).json(newPizza);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

pizzasRouter.route('/:pizzaId').delete(async (req, res) => {
  try {
    const { pizzaId } = req.params;
    if (!pizzaId || Number.isNaN(Number(pizzaId))) {
      res.status(400).json({ message: 'Invalid id' });
    }
    await pizzaService.deletePizza(pizzaId);
    res.status(204).json({ message: 'Pizza was deleted' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

pizzasRouter.route('/:pizzaId').get(async (req, res) => {
  try {
    const { pizzaId } = req.params;
    if (!pizzaId || Number.isNaN(Number(pizzaId))) {
      return res.status(400).json({ message: 'Invalid id' });
    }
    const currentPizza = await pizzaService.getOnePizza(pizzaId);
    if (!currentPizza) {
      return res.status(400).json({ message: 'No such pizza' });
    }
    res.status(200).json(currentPizza);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

pizzasRouter.route('/:pizzaId').patch(async (req, res) => {
  try {
    const { pizzaId } = req.params;
    if (!pizzaId || Number.isNaN(Number(pizzaId))) {
      res.status(400).json({ message: 'Invalid id' });
    }
    const data = req.body;
    await pizzaService.editPizza(pizzaId, data);
    const editedPizza = await pizzaService.getOnePizza(pizzaId);
    res.status(200).json(editedPizza);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = pizzasRouter;
