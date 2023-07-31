import type { NextApiRequest, NextApiResponse } from 'next'

// import { prisma } from '@/services/prisma'

import type { TimeInterval } from '@/services/api/api.types'
import { getServerSession } from 'next-auth'
import { buildNextAuthOptions } from '../../auth/[...nextauth].api'

type ValidateTimeIntervalsInput = (timeIntervals?: TimeInterval[]) => boolean

const validateTimeIntervalsInput: ValidateTimeIntervalsInput = (
  timeIntervals,
) => {
  if (!timeIntervals) return false

  if (timeIntervals.length === 0) return false

  return timeIntervals.every(
    (timeInterval) =>
      timeInterval.day &&
      timeInterval.startTimeInMinutes &&
      timeInterval.endTimeInMinutes,
  )
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') return res.status(405).end()

  const timeIntervals: TimeInterval[] = req.body.timeIntervals

  const timeIntervalsAreValid = validateTimeIntervalsInput(timeIntervals)

  if (!timeIntervalsAreValid) {
    return res
      .status(400)
      .json({ message: 'User time intervals are not valid' })
  }

  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  if (!session) {
    return res.status(400).json({ message: 'User is not logged in' })
  }

  // const userId = (session.user as { id?: string })?.id

  return res.status(200).json({ session })

  // const userId = session.user.id

  // if (!userId) return res.status(400).json({ message: 'User id not found' })

  // const user = await prisma.user.findUnique({ where: { id: userId } })

  // if (!user) return res.status(400).json({ message: 'User not found' })

  // const mappedTimeIntervals = timeIntervals.map((timeInterval) => ({
  //   week_day: timeInterval.day,
  //   start_time_in_minutes: timeInterval.startTimeInMinutes,
  //   end_time_in_minutes: timeInterval.endTimeInMinutes,
  //   user_id: userId,
  // }))

  // await prisma.userTimeInterval.createMany({
  //   data: mappedTimeIntervals,
  //   skipDuplicates: true,
  // })

  // return res.status(201).end()
}

export default handler
