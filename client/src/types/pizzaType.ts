import type { z } from 'zod';
import type { pizzasFormSchema, pizzasSchema } from '../utils/validation';

export type PizzaT = z.infer<typeof pizzasSchema>;
export type PizzaTForm = z.infer<typeof pizzasFormSchema>;
