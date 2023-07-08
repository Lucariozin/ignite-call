import { useState } from 'react'

import { Checkbox, Text } from '@ignite-ui-lucariozin/react'

import { HoursInput } from '../HoursInput'

import { WeekDay, Container, Schedules } from './TimeIntervalItem.styles'

export const TimeIntervalItem = () => {
  const [startHour, setStartHour] = useState('')
  const [endHour, setEndHour] = useState('')

  return (
    <Container>
      <WeekDay>
        <Checkbox />

        <Text>Segunda-feira</Text>
      </WeekDay>

      <Schedules>
        <HoursInput value={startHour} setValue={setStartHour} />

        <HoursInput value={endHour} setValue={setEndHour} />
      </Schedules>
    </Container>
  )
}
