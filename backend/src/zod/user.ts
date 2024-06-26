import * as z from "zod";

export const signupSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string()
})

export const signinSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
})

export const updateProfileSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string()
})