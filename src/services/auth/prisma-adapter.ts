import type { NextApiRequest, NextApiResponse } from 'next'
import type { Adapter, AdapterUser, AdapterSession } from 'next-auth/adapters'

import { parseCookies, destroyCookie } from 'nookies'

import { prisma } from '../prisma'

type CreateUser = (
  user: Omit<AdapterUser, 'id'>,
  req: NextApiRequest,
  res: NextApiResponse,
) => Promise<AdapterUser>

const createUser: CreateUser = async (user, req, res) => {
  const cookieKey = '@ignite-call:user-id'

  const { [cookieKey]: cookieUserId } = parseCookies({ req })

  if (!cookieUserId) {
    throw new Error('User ID not found on cookies')
  }

  const response = await prisma.user.update({
    where: {
      id: cookieUserId,
    },
    data: {
      name: user.name,
      email: user.email,
      avatar_url: user.avatar_url,
    },
  })

  destroyCookie({ res }, cookieKey, { path: '/' })

  const updatedUser = {
    id: response.id,
    name: response.name,
    email: response.email,
    username: response.username,
    avatar_url: response.avatar_url,
  } as AdapterUser

  return updatedUser
}

const getUser: Adapter['getUser'] = async (id) => {
  const user = await prisma.user.findUnique({
    where: { id },
  })

  if (!user) return null

  const existingUser = {
    id: user.id,
    name: user.name,
    email: user.email,
    username: user.username,
    avatar_url: user.avatar_url,
  } as AdapterUser

  return existingUser
}

const getUserByEmail: Adapter['getUserByEmail'] = async (email) => {
  const user = await prisma.user.findUnique({
    where: { email },
  })

  if (!user) return null

  const existingUser = {
    id: user.id,
    name: user.name,
    email: user.email,
    username: user.username,
    avatar_url: user.avatar_url,
  } as AdapterUser

  return existingUser
}

const getUserByAccount: Adapter['getUserByAccount'] = async ({
  providerAccountId,
  provider,
}) => {
  const response = await prisma.account.findUnique({
    where: {
      provider_provider_account_id: {
        provider,
        provider_account_id: providerAccountId,
      },
    },
    include: {
      user: true,
    },
  })

  if (!response) return null

  const user = {
    id: response.user.id,
    name: response.user.name,
    email: response.user.email,
    username: response.user.username,
    avatar_url: response.user.avatar_url,
  } as AdapterUser

  return user
}

const updateUser: Adapter['updateUser'] = async (user) => {
  const response = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      name: user.name,
      email: user.email,
      avatar_url: user.avatar_url,
    },
  })

  const updatedUser = {
    id: response.id,
    name: response.name,
    username: response.username,
    email: response.email,
    avatar_url: response.avatar_url,
  } as AdapterUser

  return updatedUser
}

const linkAccount: Adapter['linkAccount'] = async (account) => {
  await prisma.account.create({
    data: {
      user_id: account.userId,
      type: account.type,
      provider: account.provider,
      provider_account_id: account.providerAccountId,
      refresh_token: account.refresh_token,
      access_token: account.access_token,
      expires_at: account.expires_at,
      token_type: account.token_type,
      scope: account.scope,
      id_token: account.id_token,
      session_state: account.session_state,
    },
  })
}

const createSession: Adapter['createSession'] = async ({
  sessionToken,
  userId,
  expires,
}) => {
  const response = await prisma.session.create({
    data: {
      user_id: userId,
      expires,
      session_token: sessionToken,
    },
  })

  const newSession: AdapterSession = {
    userId: response.user_id,
    expires: response.expires,
    sessionToken: response.session_token,
  }

  return newSession
}

const getSessionAndUser: Adapter['getSessionAndUser'] = async (
  sessionToken,
) => {
  const response = await prisma.session.findUnique({
    where: {
      session_token: sessionToken,
    },
    include: {
      user: true,
    },
  })

  if (!response) return null

  const { user, ...session } = response

  const existingSession: AdapterSession = {
    userId: session.user_id,
    expires: session.expires,
    sessionToken: session.session_token,
  }

  const existingUser = {
    id: user.id,
    name: user.name,
    email: user.email,
    username: user.username,
    avatar_url: user.avatar_url,
  } as AdapterUser

  return {
    user: existingUser,
    session: existingSession,
  }
}

const updateSession: Adapter['updateSession'] = async ({
  sessionToken,
  userId,
  expires,
}) => {
  const response = await prisma.session.update({
    where: {
      session_token: sessionToken,
    },
    data: {
      expires,
      user_id: userId,
    },
  })

  const updatedSession: AdapterSession = {
    sessionToken: response.session_token,
    userId: response.user_id,
    expires: response.expires,
  }

  return updatedSession
}

const deleteSession: Adapter['deleteSession'] = async (sessionToken) => {
  await prisma.session.delete({
    where: {
      session_token: sessionToken,
    },
  })
}

export const PrismaAdapter = (
  req: NextApiRequest,
  res: NextApiResponse,
): Adapter => {
  return {
    getUser,
    updateUser,
    linkAccount,
    createSession,
    updateSession,
    deleteSession,
    getUserByEmail,
    getUserByAccount,
    getSessionAndUser,
    createUser: async (user) => await createUser(user, req, res),
  }
}
