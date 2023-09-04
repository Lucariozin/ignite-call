import type { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '@/services/prisma'

import dayjs from 'dayjs'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') return res.status(405).end()

  const username = req.query.username
  const date = req.query.date

  if (!username || !date) {
    return res.status(400).json({ message: 'Invalid date' })
  }

  const formattedDate = dayjs(new Date(String(date)))

  const dateHasPassed = formattedDate.isBefore(new Date())

  if (dateHasPassed) {
    return res.status(400).json({ message: 'Date has passed' })
  }

  const weekDay = formattedDate.day() + 2

  const formattedWeekDay = weekDay > 7 ? 1 : weekDay

  const timeInterval = await prisma.userTimeInterval.findFirst({
    select: {
      end_time_in_minutes: true,
      start_time_in_minutes: true,
    },
    where: {
      user: {
        username: String(username),
      },
      week_day: formattedWeekDay,
    },
  })

  if (!timeInterval) {
    return res.status(400).json({ message: 'Date is unavailable' })
  }

  const startHour = timeInterval.start_time_in_minutes / 60
  const endHour = timeInterval.end_time_in_minutes / 60

  const schedulingRange = Array.from({
    length: endHour - startHour,
  }).map((_, index) => startHour + index)

  const schedulings = await prisma.scheduling?.findMany({
    select: {
      date: true,
    },
    where: {
      user: {
        username: String(username),
      },
      date: {
        gte: formattedDate.toDate(),
        lte: formattedDate.add(1, 'day').toDate(),
      },
    },
  })

  const blockedTimes = schedulings.map((scheduling) =>
    dayjs(scheduling.date).get('hour'),
  )

  const availableTimes = schedulingRange.filter(
    (schedulingTime) => !blockedTimes.includes(schedulingTime),
  )

  return res.json({
    availableTimes,
    blockedTimes,
  })
}

export default handler
