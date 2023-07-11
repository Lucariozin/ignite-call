import { useState } from 'react'
import { Checkbox, Text } from '@ignite-ui-lucariozin/react'

import { formatDayOfWeek } from '@/utils/formatDayOfWeek'

import { HoursInput } from '../HoursInput'

import { WeekDay, Container, Schedules } from './TimeIntervalItem.styles'

import type { DayOfWeekInEnglish } from '@/@types/daysOfWeek'

interface TimeIntervalItemProps {
  day: DayOfWeekInEnglish
  available: boolean

  toggleTimeIntervalAvailability: (day: DayOfWeekInEnglish) => void
}

export const TimeIntervalItem = ({
  day,
  available,
  toggleTimeIntervalAvailability,
}: TimeIntervalItemProps) => {
  const [startHour, setStartHour] = useState('')
  const [endHour, setEndHour] = useState('')

  const formattedDayOfWeek = formatDayOfWeek(day)

  const handleToggleTimeIntervalAvailability = () => {
    toggleTimeIntervalAvailability(day)
  }

  return (
    <Container>
      <WeekDay>
        <Checkbox
          checked={available}
          onClick={handleToggleTimeIntervalAvailability}
        />

        <Text>{formattedDayOfWeek}</Text>
      </WeekDay>

      <Schedules>
        <HoursInput
          value={startHour}
          setValue={setStartHour}
          disabled={!available}
        />

        <HoursInput
          value={endHour}
          setValue={setEndHour}
          disabled={!available}
        />
      </Schedules>
    </Container>
  )
}
