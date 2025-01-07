import Credentials from 'next-auth/providers/credentials'
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
        }

        return null
      },
    }),
  ],
}
// satisfies typeof NextAuthConfig