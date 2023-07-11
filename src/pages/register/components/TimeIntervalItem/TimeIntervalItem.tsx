import { Checkbox, Text } from '@ignite-ui-lucariozin/react'

import { formatDayOfWeek } from '@/utils/formatDayOfWeek'

import { HourInput } from '../HourInput'

import { WeekDay, Container, Schedules } from './TimeIntervalItem.styles'

import type { TimeInterval } from '../../time-intervals/TimeIntervals.types'

interface TimeIntervalItemProps {
  day: string
  endHour: number
  startHour: number
  available: boolean

  setTimeInterval: (params: { day: string; timeInterval: TimeInterval }) => void
}

export const TimeIntervalItem = ({
  day,
  endHour,
  startHour,
  available,
  setTimeInterval,
}: TimeIntervalItemProps) => {
  const formattedDayOfWeek = formatDayOfWeek(day)

  const handleToggleAvailability = () => {
    const newTimeInterval = {
      startHour,
      endHour,
      available: !available,
    }

    setTimeInterval({ day, timeInterval: newTimeInterval })
  }

  const setStartHour = (newStartHour: string) => {
    const newTimeInterval = {
      startHour: Number(newStartHour),
      endHour,
      available,
    }

    setTimeInterval({ day, timeInterval: newTimeInterval })
  }

  const setEndHour = (newEndHour: string) => {
    const newTimeInterval = {
      startHour,
      endHour: Number(newEndHour),
      available,
    }

    setTimeInterval({ day, timeInterval: newTimeInterval })
  }

  const formattedStartHour = String(startHour)
  const formattedEndHour = String(endHour)

  return (
    <Container>
      <WeekDay>
        <Checkbox checked={available} onClick={handleToggleAvailability} />

        <Text>{formattedDayOfWeek}</Text>
      </WeekDay>

      <Schedules>
        <HourInput
          value={formattedStartHour}
          setValue={setStartHour}
          disabled={!available}
        />

        <HourInput
          value={formattedEndHour}
          setValue={setEndHour}
          disabled={!available}
        />
      </Schedules>
    </Container>
  )
}
