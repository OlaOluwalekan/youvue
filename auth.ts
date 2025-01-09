import NextAuth from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { db } from './lib/db'
import authConfig from './auth.config'
import Credentials from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import { getUserByEmail } from './utils/actions/user'

export const {
  handlers,
  // : { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: 'jwt' },
  // providers: [
  //   Credentials({
  //     credentials: {
  //       email: {},
  //       password: {},
  //     },
  //     authorize: async (credentials) => {
  //       let user = null

  //       // get existing user
  //       user = await getUserByEmail(credentials?.email as string)
  //       if (!user) {
  //         throw new Error('Invalid credentials')
  //       }

  //       // hash password
  //       const passwordMatch = bcrypt.compare(
  //         credentials?.password as string,
  //         user?.password as string
  //       )
  //       if (!passwordMatch) {
  //         throw new Error('Invalid credentials')
  //       }

  //       return user
  //     },
  //   }),
  // ],
  ...authConfig,
})
