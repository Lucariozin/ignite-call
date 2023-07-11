import { useState } from 'react'

import { ArrowRight } from 'phosphor-react'

import { Button, Heading, MultiStep, Text } from '@ignite-ui-lucariozin/react'

import { TimeIntervalItem } from '../components/TimeIntervalItem'

import {
  Header,
  Container,
  Intervals,
  TimeIntervalsContainer,
} from './TimeIntervals.styles'

import type { DayOfWeekInEnglish } from '@/@types/daysOfWeek'

type TimeInterval = {
  available: boolean
  startHour: number
  endHour: number
}

type TimeIntervalsState = {
  monday: TimeInterval
  tuesday: TimeInterval
  wednesday: TimeInterval
  thursday: TimeInterval
  friday: TimeInterval
  saturday: TimeInterval
  sunday: TimeInterval
}

const TimeIntervals = () => {
  const [timeIntervals, setTimeIntervals] = useState<TimeIntervalsState>({
    monday: {
      available: false,
      startHour: 0,
      endHour: 0,
    },
    tuesday: {
      available: false,
      startHour: 0,
      endHour: 0,
    },
    wednesday: {
      available: false,
      startHour: 0,
      endHour: 0,
    },
    thursday: {
      available: false,
      startHour: 0,
      endHour: 0,
    },
    friday: {
      available: false,
      startHour: 0,
      endHour: 0,
    },
    saturday: {
      available: false,
      startHour: 0,
      endHour: 0,
    },
    sunday: {
      available: false,
      startHour: 0,
      endHour: 0,
    },
  })

  const toggleTimeIntervalAvailability = (day: DayOfWeekInEnglish) => {
    const timeInterval = timeIntervals[day]

    if (!timeInterval) return

    const newTimeIntervals: TimeIntervalsState = {
      ...timeIntervals,

      [day]: { ...timeInterval, available: !timeInterval.available },
    }

    setTimeIntervals(newTimeIntervals)
  }

  const days = Object.keys(timeIntervals ?? {}) as DayOfWeekInEnglish[]

  return (
    <Container>
      <Header>
        <Heading as="h1">Quase lá</Heading>

        <Text>
          Defina o intervalo de horários que você está disponível em cada dia da
          semana.
        </Text>

        <MultiStep size={4} currentStep={3} />
      </Header>

      <TimeIntervalsContainer>
        <Intervals>
          {days.map((day) => {
            const timeInterval = timeIntervals[day]

            return (
              <TimeIntervalItem
                key={day}
                day={day}
                available={timeInterval.available}
                toggleTimeIntervalAvailability={toggleTimeIntervalAvailability}
              />
            )
          })}
        </Intervals>

        <Button type="button">
          Próximo passo <ArrowRight weight="bold" />
        </Button>
      </TimeIntervalsContainer>
    </Container>
  )
}

export default TimeIntervals
