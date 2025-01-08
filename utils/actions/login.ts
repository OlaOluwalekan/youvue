'use server'

import ActionResponse from '../responseTemplate'
import { LoginSchema } from '../schema/auth.schema'
import { getUserByEmail } from './user'

export const login = async (formData: FormData) => {
  const email = formData.get('email')
  const password = formData.get('password')

  //   check that email and password is not empty
  if (!email) {
    return ActionResponse.error('Email is required')
  }
  if (!password) {
    return ActionResponse.error('Password is required')
  }

  //   check if user exists in database
  const existingUser = await getUserByEmail(email as string)
  if (!existingUser) {
    return ActionResponse.error('Invalid Email/Password')
  }

  //   try to login user
  try {
    // validate inputs
    LoginSchema.safeParse({ email, password })
    return ActionResponse.success('Login successfully', { email, password })
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return ActionResponse.error(JSON.parse(error.message)[0].message)
    }
    return ActionResponse.error('something went wrong')
  }
}
