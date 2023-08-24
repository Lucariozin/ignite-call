import type { HTMLProps } from 'react'

import { Container } from './CalendarWeekDay.styles'

type Day = {
  day: number
  weekDay: number
}

interface CalendarWeekDayProps extends HTMLProps<HTMLButtonElement> {
  day?: Day | null
  selectedDay?: Day | null
  selectDay?: (params: Day | null) => void
}

export const CalendarWeekDay = ({
  day = null,
  selectedDay,
  selectDay = () => {},

  ...props
}: CalendarWeekDayProps) => {
  const handleSelectDay = () => {
    if (
      selectedDay?.day === day?.day &&
      selectedDay?.weekDay === day?.weekDay
    ) {
      selectDay(null)
      return
    }

    selectDay(day)
  }

  const isSelected = day
    ? day?.day === selectedDay?.day && day?.weekDay === selectedDay?.weekDay
    : false

  return (
    <Container
      onClick={handleSelectDay}
      isSelected={isSelected}
      {...(props as unknown as any)}
    >
      {day?.day ?? ''}
    </Container>
  )
}
