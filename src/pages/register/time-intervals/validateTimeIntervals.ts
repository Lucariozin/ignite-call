import * as zod from 'zod'

import type { TimeIntervalsState } from './TimeIntervals.types'

export const validateTimeIntervals = (timeIntervals: TimeIntervalsState) => {
  const timeIntervalZodSchema = zod.object({
    available: zod.boolean(),
    startHour: zod.number(),
    endHour: zod.number(),
  })

  const timeIntervalsZodSchema = zod
    .object({
      1: timeIntervalZodSchema,
      2: timeIntervalZodSchema,
      3: timeIntervalZodSchema,
      4: timeIntervalZodSchema,
      5: timeIntervalZodSchema,
      6: timeIntervalZodSchema,
      7: timeIntervalZodSchema,
    })
    .transform((zodTimeIntervals) => {
      const newZodTimeIntervals: Partial<TimeIntervalsState> = {}

      const days = Object.keys(
        zodTimeIntervals,
      ) as unknown as (keyof typeof zodTimeIntervals)[]

      days.forEach((day) => {
        const timeInterval = zodTimeIntervals[day]

        if (!timeInterval.available) return

        newZodTimeIntervals[day] = timeInterval
      })

      return newZodTimeIntervals
    })
    .refine((zodTimeIntervals) => {
      const days = Object.keys(
        zodTimeIntervals,
      ) as unknown as (keyof typeof zodTimeIntervals)[]

      return days.length > 0
    })

  const result = timeIntervalsZodSchema.safeParse(timeIntervals)

  return result
}
