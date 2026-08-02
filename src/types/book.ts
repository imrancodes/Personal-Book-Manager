import { z } from "zod";
import { bookSchema } from "../lib/validations/book";

export type BookStatus =
  | "want-to-read"
  | "reading"
  | "completed";

export interface Book {
  _id: string;
  title: string;
  author: string;
  status: BookStatus;
  tags: string[];
}

export type BookFormData = z.infer<typeof bookSchema>;
