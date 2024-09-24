import { z } from 'zod';

export const pizzasSchema = z.object({
  id: z.number(),
  title: z.string(),
  imageUrl: z.string(),
  price: z.number(),
  rating: z.number().nullable(),
});

export const pizzasFormSchema = z.object({
  title: z.string(),
  imageUrl: z.string(),
  price: z.string(),
  rating: z.string(),
});
