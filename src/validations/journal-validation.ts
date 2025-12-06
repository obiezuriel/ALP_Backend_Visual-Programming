import z, { ZodType } from 'zod';

export class JournalValidation {
    static readonly CREATE: ZodType = z.object({
        date: z
            .string({
                error: "Date must be a string"
            })
            .min(1,{
                error: "Date cannot be empty"
            }),
        title: z
            .string({
                error: "Title must be a string"
            })
            .min(1,{
                error: "Title cannot be empty"
            }),
        content: z
            .string({
                error: "Content must be a string"
            })
            .min(1,{
                error: "Content cannot be empty"
            }),
        user_id: z
            .number({
                error: "User ID must be a number"
            })
            .min(1,{
                error: "User ID cannot be empty"
            })
    })
}