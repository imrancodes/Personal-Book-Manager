import { z } from "zod";

export const bookSchema = z.object({
  title: z
    .string()
    .trim()
    .min(2, "Title must be at least 2 characters.")
    .max(100, "Title cannot exceed 100 characters."),

  author: z
    .string()
    .trim()
    .min(2, "Author must be at least 2 characters.")
    .max(100, "Author cannot exceed 100 characters."),

  tags: z
    .string()
    .trim()
    .optional(),

  status: z.enum([
    "want-to-read",
    "reading",
    "completed",
  ]),
});