import type { AxiosInstance } from 'axios';
import { ZodError } from 'zod';
import type { PizzaT, PizzaTForm } from '../types/pizzaType';
import { pizzasSchema } from '../utils/validation';
import axiosInstance from './axiosInstance';

class PizzaService {
  constructor(private readonly client: AxiosInstance) {}

  async getPizzas(): Promise<PizzaT[]> {
    try {
      const response = await this.client<PizzaT[]>('/pizzas');
      if (response.status !== 200) {
        throw new Error('Неверный статус получения пицц');
      }
      return pizzasSchema.array().parse(response.data);
    } catch (error) {
      if (error instanceof ZodError) {
        console.log('ZOD ERROR', error.issues);
      } else {
        console.log('Ошибка получения пицц в сервисе', error);
      }
      return Promise.reject(error);
    }
  }

  async getOnePizza(id: PizzaT['id']): Promise<PizzaT> {
    try {
      const response = await this.client<PizzaT>(`/pizzas/${id}`);
      if (response.status !== 200) {
        throw new Error('Неверный статус получения пиццы');
      }
      return pizzasSchema.parse(response.data);
    } catch (error) {
      if (error instanceof ZodError) {
        console.log('ZOD ERROR', error.issues);
      } else {
        console.log('Ошибка получения пицц в сервисе', error);
      }
      return Promise.reject(error);
    }
  }

  async addPizza(formData: PizzaTForm): Promise<PizzaT> {
    try {
      const response = await this.client.post<PizzaTForm>('/pizzas', formData);
      if (response.status !== 201) {
        throw new Error('Неверный статус добавления пицц');
      }
      return pizzasSchema.parse(response.data);
    } catch (error) {
      if (error instanceof ZodError) {
        console.log('ZOD ERROR', error.issues);
      } else {
        console.log('Ошибка добавления пицц в сервисе', error);
      }
      return Promise.reject(error);
    }
  }

  async deletePizza(id: PizzaT['id']): Promise<PizzaT['id']> {
    try {
      const response = await this.client.delete(`/pizzas/${id}`);
      if (response.status !== 204) {
        throw new Error('Неверный статус удаления пицц');
      }
      return id;
    } catch (error) {
      if (error instanceof ZodError) {
        console.log('ZOD ERROR', error.issues);
      } else {
        console.log('Ошибка удаления пицц в сервисе', error);
      }
      return Promise.reject(error);
    }
  }

  async editPizza(id: PizzaT['id'], formData: PizzaTForm): Promise<PizzaT> {
    try {
      const response = await this.client.patch<PizzaTForm>(`/pizzas/${id}`, formData);
      if (response.status !== 200) {
        throw new Error('Неверный статус добавления пицц');
      }
      return pizzasSchema.parse(response.data);
    } catch (error) {
      if (error instanceof ZodError) {
        console.log('ZOD ERROR', error.issues);
      } else {
        console.log('Ошибка удаления пицц в сервисе', error);
      }
      return Promise.reject(error);
    }
  }
}

export default new PizzaService(axiosInstance);
