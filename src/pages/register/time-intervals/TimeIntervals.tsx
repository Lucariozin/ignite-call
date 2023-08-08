import { useState } from 'react'

import { api } from '@/services/api'

import { useRouter } from 'next/router'
import { ErrorMessage, useErrorMessage } from './hooks/ErrorMessage'

import { ArrowRight } from 'phosphor-react'

import { Button, Heading, MultiStep, Text } from '@ignite-ui-lucariozin/react'

import { TimeIntervalItem } from '../components/TimeIntervalItem'

import {
  Header,
  Container,
  Intervals,
  ErrorMessageContainer,
  TimeIntervalsContainer,
} from './TimeIntervals.styles'

import { defaultTimeIntervals } from './defaultTimeIntervals'
import { validateTimeIntervals } from './validation/validateTimeIntervals'

import type { SetTimeInterval, TimeIntervalsState } from './TimeIntervals.types'

const TimeIntervals = () => {
  const router = useRouter()

  const { showErrorMessage } = useErrorMessage()

  const [timeIntervals, setTimeIntervals] = useState(defaultTimeIntervals)

  const days = Object.keys(timeIntervals)

  const setTimeInterval: SetTimeInterval = ({ day, timeInterval }) => {
    const existingTimeInterval = timeIntervals[day]

    if (!existingTimeInterval) return

    const newTimeIntervals: TimeIntervalsState = {
      ...timeIntervals,

      [day]: timeInterval,
    }

    setTimeIntervals(newTimeIntervals)
  }

  const handleNextStep = async () => {
    const validationResult = validateTimeIntervals(timeIntervals)

    if (validationResult.errors.length) {
      const errorMessage = validationResult.errors[0].message

      showErrorMessage({ message: errorMessage })

      return
    }

    const response = await api.saveUserTimeIntervals({
      timeIntervals: validationResult.data,
    })

    if (response.status !== 'success') return

    await router.push('/register/update-profile')
  }

  return (
    <Container>
      <Header>
        <Heading as="h1">Defina sua disponibilidade</Heading>

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

        <ErrorMessageContainer>
          <ErrorMessage />
        </ErrorMessageContainer>

        <Button type="button" onClick={handleNextStep}>
          Próximo passo <ArrowRight weight="bold" />
        </Button>
      </TimeIntervalsContainer>
    </Container>
  )
}

export default TimeIntervals
