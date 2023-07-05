import type { Adapter, AdapterUser } from 'next-auth/adapters'

import { prisma } from '../prisma'

const getUser: Adapter['getUser'] = async (id) => {
  const user = await prisma.user.findUniqueOrThrow({
    where: { id },
  })

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
  const user = await prisma.user.findUniqueOrThrow({
    where: { email },
  })

  const existingUser = {
    id: user.id,
    name: user.name,
    email: user.email,
    username: user.username,
    avatar_url: user.avatar_url,
  } as AdapterUser

  return existingUser
}

export const PrismaAdapter = (): Adapter => {
  return {
    async createUser(user) {},

    getUser,
    getUserByEmail,

    async getUserByAccount({ providerAccountId, provider }) {},

    async updateUser(user) {},

    async deleteUser(userId) {},

    async linkAccount(account) {},

    async unlinkAccount({ providerAccountId, provider }) {},

    async createSession({ sessionToken, userId, expires }) {},

    async getSessionAndUser(sessionToken) {},

    async updateSession({ sessionToken }) {},

    async deleteSession(sessionToken) {},

    async createVerificationToken({ identifier, expires, token }) {},

    async useVerificationToken({ identifier, token }) {},
  }
}
