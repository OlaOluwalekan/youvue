import { z } from 'zod'

export const LoginSchema = z.object({
  email: z
    .string()
    .email()
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
      message: 'invalid email address',
    }), // checks that email is valid,
  password: z.string(),
})
