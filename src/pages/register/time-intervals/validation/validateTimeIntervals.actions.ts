import type { TimeIntervalsState } from '../TimeIntervals.types'
import type { NewTimeInterval } from './validateTimeIntervals.types'

export const normalizeTimeIntervals = (timeIntervals: TimeIntervalsState) => {
  type TimeIntervalsKey = keyof typeof timeIntervals

  const newTimeIntervals: NewTimeInterval[] = []

  const days = Object.keys(timeIntervals) as unknown as TimeIntervalsKey[]

  days.forEach((day) => {
    const existingTimeInterval = timeIntervals[day]

    if (!existingTimeInterval.available) return

    const newTimeInterval: NewTimeInterval = {
      day,
      startTimeInMinutes: existingTimeInterval.startHour * 60,
      endTimeInMinutes: existingTimeInterval.endHour * 60,
    }

    newTimeIntervals.push(newTimeInterval)
  })

  return newTimeIntervals
}

export const checkTimeIntervalsLength = (timeIntervals: NewTimeInterval[]) => {
  return timeIntervals.length > 0
}

export const checkTimeIntervalsHours = (timeIntervals: NewTimeInterval[]) => {
  return timeIntervals.every(({ endTimeInMinutes, startTimeInMinutes }) => {
    const hasAtLeastOneHour = endTimeInMinutes - 60 >= startTimeInMinutes

    return hasAtLeastOneHour
  })
}
