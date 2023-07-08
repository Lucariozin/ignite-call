import { ArrowRight } from 'phosphor-react'

import { Button, Heading, MultiStep, Text } from '@ignite-ui-lucariozin/react'

import { TimeIntervalItem } from '../components/TimeIntervalItem'

import {
  Header,
  Container,
  Intervals,
  TimeIntervalsContainer,
} from './TimeIntervals.styles'

// type IntervalDay = {
//   available: boolean
//   startHour: number
//   endHour: number
// }

// type TimeIntervalsState = {
//   monday: IntervalDay
//   tuesday: IntervalDay
//   wednesday: IntervalDay
//   thursday: IntervalDay
//   friday: IntervalDay
//   saturday: IntervalDay
//   sunday: IntervalDay
// }

const TimeIntervals = () => {
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
          <TimeIntervalItem />
          <TimeIntervalItem />
        </Intervals>

        <Button type="button">
          Próximo passo <ArrowRight weight="bold" />
        </Button>
      </TimeIntervalsContainer>
    </Container>
  )
}

export default TimeIntervals
