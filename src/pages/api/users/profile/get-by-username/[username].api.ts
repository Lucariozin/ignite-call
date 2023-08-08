import type { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '@/services/prisma'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') return res.status(405).end()

  const username = String(req.query?.username ?? '')

  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  })

  const profile = {
    name: user?.name,
    username,
    bio: user?.bio,
    avatarUrl: user?.avatar_url,
  }

  return res.status(200).json({ profile })
}

export default handler
