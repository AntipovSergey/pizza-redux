import { createSlice } from '@reduxjs/toolkit';
import type { PizzaT } from '../../../../types/pizzaType';
import {
  addPizzaThunk,
  deletePizzasThunk,
  editPizza,
  getOnePizza,
  getPizzasThunk,
} from './pizzaThunk';

export type PizzaState = {
  pizzas: PizzaT[];
  currentPizza: PizzaT | null;
  error: string | null;
};

const initialState: PizzaState = {
  pizzas: [],
  currentPizza: null,
  error: null,
};

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPizzasThunk.fulfilled, (state, action) => {
        state.pizzas = [...action.payload];
      })
      .addCase(getPizzasThunk.rejected, (state) => {
        state.error = 'Ошибка подгрузки данных';
      })
      .addCase(getOnePizza.fulfilled, (state, action) => {
        state.currentPizza = action.payload;
      })
      .addCase(getOnePizza.rejected, (state) => {
        state.error = 'Ошибка подгрузки данных';
      })
      .addCase(editPizza.fulfilled, (state, action) => {
        state.pizzas = state.pizzas.map((pizza) =>
          pizza.id === action.payload.id ? action.payload : pizza,
        );
        state.currentPizza = action.payload;
      })
      .addCase(editPizza.rejected, (state) => {
        state.error = 'Ошибка подгрузки данных';
      })

      .addCase(addPizzaThunk.fulfilled, (state, action) => {
        state.pizzas = [action.payload, ...state.pizzas];
      })
      .addCase(addPizzaThunk.rejected, (state) => {
        state.error = 'Ошибка подгрузки данных';
      })
      .addCase(deletePizzasThunk.fulfilled, (state, action) => {
        state.pizzas = state.pizzas.filter((pizza) => pizza.id !== action.payload);
      })
      .addCase(deletePizzasThunk.rejected, (state) => {
        state.pizzas = [...state.pizzas];
      });
  },
});

// Action creators are generated for each case reducer function
export default pizzaSlice.reducer;
