import NextAuth, { NextAuthOptions } from 'next-auth'

import GoogleProvider from 'next-auth/providers/google'

const googleProvider = GoogleProvider({
  clientId: process.env.GOOGLE_CLIENT_ID ?? '',
  clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
})

export const authOptions: NextAuthOptions = {
  providers: [googleProvider],
}

export default NextAuth(authOptions)
