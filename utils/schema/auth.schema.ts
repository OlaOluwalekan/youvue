import { z } from 'zod'

export const LoginSchema = z.object({
  email: z
    .string()
    .email()
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
      message: 'invalid email format',
    }), // checks that email is valid
  password: z.string(),
})

export const registerSchema = z.object({
  email: z
    .string()
    .email()
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
      message: 'invalid email format',
    }), // checks that email is valid
  name: z.string().min(3, { message: 'Name should be at least 3 characters' }),
  password: z
    .string()
    .min(8, { message: 'Password should be at least 8 characters' })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/,
      {
        message:
          'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character',
      }
    ), // checks if password is of at least 8 characters and contains the appropriate mix
})
