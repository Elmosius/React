import {z} from "zod";

export const loginSchema = z.object({
    username: z.string().min(3).max(10),
    password: z.string().min(8),
    rememberMe: z.boolean().optional(),
})

export type LoginSchema = z.infer<typeof loginSchema>;
