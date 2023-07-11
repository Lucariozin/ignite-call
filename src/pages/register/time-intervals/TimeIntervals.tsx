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

import type { SetTimeInterval, TimeIntervalsState } from './TimeIntervals.types'

const TimeIntervals = () => {
  const [timeIntervals, setTimeIntervals] = useState<TimeIntervalsState>({
    1: {
      available: false,
      startHour: 8,
      endHour: 18,
    },
    2: {
      available: true,
      startHour: 8,
      endHour: 18,
    },
    3: {
      available: true,
      startHour: 8,
      endHour: 18,
    },
    4: {
      available: true,
      startHour: 8,
      endHour: 18,
    },
    5: {
      available: true,
      startHour: 8,
      endHour: 18,
    },
    6: {
      available: true,
      startHour: 8,
      endHour: 18,
    },
    7: {
      available: false,
      startHour: 8,
      endHour: 18,
    },
  })

  const setTimeInterval: SetTimeInterval = ({ day, timeInterval }) => {
    const existingTimeInterval = timeIntervals[day]

    if (!existingTimeInterval) return

    const newTimeIntervals: TimeIntervalsState = {
      ...timeIntervals,

      [day]: timeInterval,
    }

    setTimeIntervals(newTimeIntervals)
  }

  const days = Object.keys(timeIntervals)

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
                endHour={timeInterval.endHour}
                startHour={timeInterval.startHour}
                available={timeInterval.available}
                setTimeInterval={setTimeInterval}
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
