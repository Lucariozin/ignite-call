import { Text } from '@ignite-ui-lucariozin/react'

import { Container, TimeItem, Times } from './SchedulingTimes.styles'

export const SchedulingTimes = () => {
  return (
    <Container>
      <Text>
        terça-feira, <span>20 de setembro</span>
      </Text>

      <Times>
        <TimeItem>0:00h</TimeItem>
        <TimeItem>1:00h</TimeItem>
        <TimeItem>2:00h</TimeItem>
        <TimeItem>3:00h</TimeItem>
        <TimeItem>4:00h</TimeItem>
        <TimeItem>5:00h</TimeItem>
        <TimeItem>6:00h</TimeItem>
        <TimeItem>7:00h</TimeItem>
        <TimeItem>8:00h</TimeItem>
        <TimeItem>9:00h</TimeItem>
        <TimeItem>10:00h</TimeItem>
        <TimeItem>11:00h</TimeItem>
        <TimeItem>12:00h</TimeItem>
        <TimeItem>13:00h</TimeItem>
        <TimeItem>14:00h</TimeItem>
        <TimeItem>15:00h</TimeItem>
        <TimeItem>16:00h</TimeItem>
        <TimeItem>17:00h</TimeItem>
        <TimeItem>18:00h</TimeItem>
        <TimeItem>19:00h</TimeItem>
        <TimeItem>20:00h</TimeItem>
        <TimeItem>21:00h</TimeItem>
        <TimeItem>22:00h</TimeItem>
        <TimeItem>23:00h</TimeItem>
      </Times>
    </Container>
  )
}
