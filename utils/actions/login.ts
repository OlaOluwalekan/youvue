'use server'

import { signIn } from '@/auth'
import ActionResponse from '../responseTemplate'
import { LoginSchema } from '../schema/auth.schema'
import { getUserByEmail } from './user'
// import AuthError from "next-auth"

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

    // login user
    await signIn('credentials', { email, password, redirect: false })

    return ActionResponse.success('Login successfully', existingUser)
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return ActionResponse.error(JSON.parse(error.message)[0].message)
    }

    // checks for sign in error
    // if (error instanceof AuthError) {
    //   switch (error.type) {
    //     case 'CredentialsSignin':
    //       return ActionResponse.error('Invalid credentials', null)
    //     default:
    //       return ActionResponse.error('An error occurred', null)
    //   }
    // }
    if (error?.type === 'CallbackRouteError') {
      return ActionResponse.error('Incorrect email/password')
    }

    // console.log('error in login action', error)

    return ActionResponse.error('something went wrong')
  }
}
