import { db } from '@/lib/db'

// get and existing user by email
export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        email,
      },
    })

    return user
  } catch (error) {
    console.error(error)
    return null
  }
}
