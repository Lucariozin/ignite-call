import type { NextApiRequest, NextApiResponse } from 'next'

import zod from 'zod'

import { getServerSession } from 'next-auth'

import { prisma } from '@/services/prisma'

import { buildNextAuthOptions } from '../../auth/[...nextauth].api'

const timeIntervalsValidationSchema = zod
  .object({
    day: zod.string(),
    startTimeInMinutes: zod.number(),
    endTimeInMinutes: zod.number(),
  })
  .array()
  .refine((timeIntervals) => !!timeIntervals)
  .refine((timeIntervals) => {
    return timeIntervals.every(
      (timeInterval) =>
        timeInterval.day &&
        timeInterval.startTimeInMinutes &&
        timeInterval.endTimeInMinutes,
    )
  })

type TimeIntervals = zod.infer<typeof timeIntervalsValidationSchema>

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') return res.status(405).end()

  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  const userId = session?.user?.id

  if (!session || !userId) return res.status(401).end()

  const timeIntervals: TimeIntervals = req.body.timeIntervals

  const { success } = timeIntervalsValidationSchema.safeParse(timeIntervals)

  if (!success) {
    return res
      .status(400)
      .json({ message: 'User time intervals are not valid' })
  }

  await Promise.all(
    timeIntervals.map((timeInterval) =>
      prisma.userTimeInterval.create({
        data: {
          week_day: Number(timeInterval.day),
          start_time_in_minutes: timeInterval.startTimeInMinutes,
          end_time_in_minutes: timeInterval.endTimeInMinutes,
          user_id: userId,
        },
      }),
    ),
  )

  return res.status(201).end()
}

export default handler
