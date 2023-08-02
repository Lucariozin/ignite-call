import type { NextApiRequest, NextApiResponse } from 'next'

import zod from 'zod'

import { getServerSession } from 'next-auth'

import { prisma } from '@/services/prisma'

import { buildNextAuthOptions } from '../../auth/[...nextauth].api'

const profileValidationSchema = zod.object({
  bio: zod.string(),
})

type Profile = zod.infer<typeof profileValidationSchema>

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'PUT') return res.status(405).end()

  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  const userId = session?.user?.id

  if (!session || !userId) return res.status(401).end()

  const profile: Profile = req.body.profile

  if (!profile) return res.status(400).json({ message: 'Invalid user profile' })

  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      bio: profile.bio,
    },
  })

  return res.status(204).end()
}

export default handler
