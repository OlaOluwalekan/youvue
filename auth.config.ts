import Credentials from 'next-auth/providers/credentials'
import Google from 'next-auth/providers/google'
import { getUserByEmail } from './utils/actions/user'
import bcrypt from 'bcryptjs'

export default {
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        // console.log('here in credentials', credentials)

        const user = await getUserByEmail(credentials?.email as string)
        if (!user || !user.password) {
          return null
        }

        const passwordMatch = await bcrypt.compare(
          credentials?.password as string,
          user.password
        )
        if (passwordMatch) {
          return user
        } else {
          throw new Error('Invalid credentials')
        }

        return null
      },
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
}
// satisfies typeof NextAuthConfig
