import { z } from "zod";

export const taskSchema = z.object({
    // userId: z.number(),
    title: z.string(),
    description: z.string()
})