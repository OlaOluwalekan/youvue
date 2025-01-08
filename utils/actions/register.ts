'use server'

import { db } from '@/lib/db'
import ActionResponse from '../responseTemplate'
import { registerSchema } from '../schema/auth.schema'
import { getUserByEmail } from './user'
import bcrypt from 'bcryptjs'

export const register = async (formData: FormData) => {
  const name = formData.get('name')
  const email = formData.get('email')
  const password = formData.get('password')
  const confirmPassword = formData.get('confirmPassword')

  //   check that name, email, password and confirm password is not empty
  if (!name) {
    return ActionResponse.error('Name is required')
  }
  if (!email) {
    return ActionResponse.error('Email is required')
  }
  if (!password) {
    return ActionResponse.error('Password is required')
  }
  if (!confirmPassword) {
    return ActionResponse.error('Please confirm your password')
  }

  //   check if password marches
  if (confirmPassword !== password) {
    return ActionResponse.error('Passwords do not match')
  }

  try {
    // validate inputs
    registerSchema.parse({ email, name, password })

    // check for existing user
    const existingUser = await getUserByEmail(email as string)
    if (existingUser) {
      return ActionResponse.error('Email already exists', null)
    }

    // hash the password
    const hashedPassword = await bcrypt.hash(password as string, 10)

    // create the new user
    const newUser = await db.user.create({
      data: {
        email: email as string,
        name: name as string,
        password: hashedPassword,
      },
    })

    return ActionResponse.success('Registration successfully', newUser)
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return ActionResponse.error(JSON.parse(error?.message)[0].message, null)
    }

    console.log('error in register schema:', error)
    return ActionResponse.error('something went wrong')
  }
}
