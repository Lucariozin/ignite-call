import * as zod from 'zod'

import {
  normalizeTimeIntervals,
  checkTimeIntervalsHours,
  checkTimeIntervalsLength,
} from './validateTimeIntervals.actions'

import type {
  ZodError,
  ZodValidationResult,
  ValidateTimeIntervals,
} from './validateTimeIntervals.types'

import { messages } from './validateTimeIntervals.messages'

export const validateTimeIntervals: ValidateTimeIntervals = (timeIntervals) => {
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
    .transform(normalizeTimeIntervals)
    .refine(checkTimeIntervalsLength, messages.SELECT_AVAILABLE_DAYS)
    .refine(checkTimeIntervalsHours, messages.INVALID_TIME_INTERVAL)

  const result = timeIntervalsZodSchema.safeParse(
    timeIntervals,
  ) as ZodValidationResult

  const zodErrors: ZodError[] = JSON.parse(result.error ?? '[]')

  const errors = zodErrors.map(({ message }) => ({ message }))

  return { data: result.data, errors }
}
