import type { NextApiRequest, NextApiResponse } from 'next'

import NextAuth, { NextAuthOptions } from 'next-auth'
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google'

import { PrismaAdapter } from '@/services/auth/prisma-adapter'

export const buildNextAuthOptions = (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
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
    profile: (profile: GoogleProfile) => ({
      id: profile.sub,
      name: profile.name,
      username: '',
      email: profile.email,
      avatar_url: profile.picture,
    }),
  })

  const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(req, res),

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

  return authOptions
}

const auth = async (req: NextApiRequest, res: NextApiResponse) => {
  const authOptions = buildNextAuthOptions(req, res)

  return await NextAuth(req, res, authOptions)
}

export default auth
