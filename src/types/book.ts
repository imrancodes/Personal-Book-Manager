import { z } from "zod";
import { bookSchema } from "../lib/validations/book";

export type BookFormData = z.infer<typeof bookSchema>;
