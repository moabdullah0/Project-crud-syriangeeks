// schema.ts (example, assuming you're using Zod)
import { z } from "zod";

export const schema = z.object({
  name: z.string().min(1, "Title is required"),
  category: z.string().min(1, "Category is required"),
  price: z.number().positive("Price must be a positive number"),
  image_url: z.string().url("Invalid URL format"),
  description: z.string().min(1, "Description is required"),
  brand: z.string().min(1, "Brand is required"),
});

export type SchemaForm = z.infer<typeof schema>;
