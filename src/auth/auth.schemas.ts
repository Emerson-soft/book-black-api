
import { z } from 'zod';

export const signUpSchema = z.object({
    email: z.email(),
    password: z.string().min(8).max(255),
    name: z.string().min(3).max(100),
    company_name: z.string().min(3).max(100),
});
export type SignUpDto = z.infer<typeof signUpSchema>;

export const signInSchema = z.object({
    email: z.email(),
    password: z.string().min(8).max(255),
});
export type SignInDto = z.infer<typeof signInSchema>;
