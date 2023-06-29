import type { NextApiRequest, NextApiResponse } from 'next'

import { setCookie } from 'nookies'

import { prisma } from '@/services/prisma'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') return res.status(405).end()

  const { name, username } = req.body

  if (!name || !username) {
    return res.status(400).json({ message: 'Invalid inputs' })
  }

  const existingUser = await prisma.user.findUnique({ where: { username } })

  if (existingUser) {
    return res.status(400).json({ message: 'Username already exists' })
  }

  const newUser = await prisma.user.create({
    data: {
      name,
      username,
    },
  })

  setCookie({ res }, '@ignite-call:user-id', newUser.id, {
    maxAge: 60 * 60 * 24, // 1 day
    path: '/',
  })

  return res.status(201).json(newUser)
}

export default handler
