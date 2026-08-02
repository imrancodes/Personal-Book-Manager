import { z } from "zod";
import { loginSchema, signupSchema } from "../lib/validations/auth";

export type LoginFormData = z.infer<typeof loginSchema>;
export type SignupFormData = z.infer<typeof signupSchema>;