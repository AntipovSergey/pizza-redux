import { createAsyncThunk } from '@reduxjs/toolkit';
import pizzaService from '../../../../services/pizzaService';
import type { PizzaT, PizzaTForm } from '../../../../types/pizzaType';

export const getPizzasThunk = createAsyncThunk('/pizzas/getPizzas', async () => {
  const data = await pizzaService.getPizzas();
  return data;
});

export const addPizzaThunk = createAsyncThunk(
  '/pizzas/addNewPizza',
  async (formData: PizzaTForm) => {
    const data = await pizzaService.addPizza(formData);
    return data;
  },
);

export const getOnePizza = createAsyncThunk('/pizzas/getOnePizza', async (id: PizzaT['id']) => {
  const data = await pizzaService.getOnePizza(id);
  return data;
});

export const editPizza = createAsyncThunk(
  '/pizzas/editPizza',
  async ({ id, formData }: { id: PizzaT['id']; formData: PizzaTForm }) => {
    const data = await pizzaService.editPizza(id, formData);
    return data;
  },
);

export const deletePizzasThunk = createAsyncThunk(
  '/pizzas/deletePizza',
  async (id: PizzaT['id']) => {
    const data = await pizzaService.deletePizza(id);
    return data;
  },
);
