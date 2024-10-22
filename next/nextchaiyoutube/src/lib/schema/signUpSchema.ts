import {z} from 'zod'

export const usenamevalidation=z
    .string()
    .min(3,"username must be at least 3 characters")
    .max(20,"username must be at most 20 characters")


export const signUpValidation=z.object({
    username:usenamevalidation,
    email:z.string().email(),
    password:z.string().min(8,"password must be at least 8 characters")
})