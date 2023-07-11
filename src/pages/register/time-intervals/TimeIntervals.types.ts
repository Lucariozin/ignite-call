export type TimeInterval = {
  available: boolean
  startHour: number
  endHour: number
}

export type TimeIntervalsState = Record<string, TimeInterval>

export type SetTimeInterval = (params: {
  day: string
  timeInterval: TimeInterval
}) => void
