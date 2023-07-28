import type { TimeIntervalsState } from '../TimeIntervals.types'

export type NewTimeInterval = {
  day: string
  startTimeInMinutes: number
  endTimeInMinutes: number
}

export type ZodError = {
  message: string
}

export type ZodValidationResult = {
  data: NewTimeInterval[]
  error?: string
}

export type ValidationResult = {
  data: NewTimeInterval[]
  errors: { message: string }[]
}

export type ValidateTimeIntervals = (
  timeIntervals: TimeIntervalsState,
) => ValidationResult
