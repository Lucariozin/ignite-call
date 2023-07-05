import NextAuth, { NextAuthOptions } from 'next-auth'

import GoogleProvider from 'next-auth/providers/google'

const googleAuthorizationScopes = [
  'https://www.googleapis.com/auth/calendar',
  'https://www.googleapis.com/auth/userinfo.email',
  'https://www.googleapis.com/auth/userinfo.profile',
]

const googleProvider = GoogleProvider({
  clientId: process.env.GOOGLE_CLIENT_ID ?? '',
  clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
  authorization: {
    params: {
      scope: googleAuthorizationScopes.join(' '),
    },
  },
})

export const authOptions: NextAuthOptions = {
  providers: [googleProvider],

  callbacks: {
    signIn: async ({ account }) => {
      const redirectErrorUrl = '/register/connect-calendar?error=permissions'
      const googleCalendarScope = 'https://www.googleapis.com/auth/calendar'

      if (account?.scope?.includes(googleCalendarScope)) return true

      return redirectErrorUrl
    },
  },
}

export default NextAuth(authOptions)
