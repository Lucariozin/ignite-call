import type { GetStaticPaths, GetStaticProps } from 'next'

import { useState } from 'react'

import dayjs from 'dayjs'

import { api } from '@/services/api'

import { CaretLeft, CaretRight } from 'phosphor-react'
import { Avatar, Heading, Text } from '@ignite-ui-lucariozin/react'

import { CalendarWeekDay } from './components/CalendarWeekDay'
import { SchedulingTimes } from './components/SchedulingTimes'

import {
  Calendar,
  Container,
  LeftColumn,
  RightColumn,
  ActionButton,
  CalendarTitle,
  CalendarHeader,
  CalendarActions,
  CalendarWeekDays,
  ProfileContainer,
} from './Schedule.styles'

type SelectedDay = {
  day: number
  weekDay: number
}

type Profile = {
  name: string
  username: string
  avatarUrl: string
  bio: string
}

interface ScheduleProps {
  profile: Profile
}

require('dayjs/locale/pt-br')

const Schedule = ({ profile }: ScheduleProps) => {
  const [selectedDay, setSelectedDay] = useState<SelectedDay | null>(null)

  const [currentDate, setCurrentDate] = useState(dayjs().locale('pt-br'))

  const daysInMonth = currentDate.daysInMonth()

  const formattedMonth = currentDate.format('MMMM')
  const formattedYear = currentDate.format('YYYY')

  const days = Array.from({ length: daysInMonth }).map((_, index) => ({
    day: index + 1,
    weekDay: currentDate.date(index + 1).day() + 1,
  }))

  const emptyDaysBeforeTheFirstDay = Array.from({
    length: days[0].weekDay - 1,
  }).map((_, index) => index)

  const selectDay = (
    params: { day: number; weekDay: number } | null = null,
  ) => {
    setSelectedDay(params)
  }

  const handleNextMonth = () => {
    selectDay(null)

    const newCurrentDate = currentDate.add(1, 'month')

    setCurrentDate(newCurrentDate)
  }

  const handlePreviousMonth = () => {
    selectDay(null)

    const newCurrentDate = currentDate.subtract(1, 'month')

    setCurrentDate(newCurrentDate)
  }

  return (
    <Container>
      <ProfileContainer>
        <Avatar src={profile.avatarUrl} />

        <Heading as="h1">{profile.name}</Heading>

        <Text>{profile.bio}</Text>
      </ProfileContainer>

      <Calendar schedulingTimesIsOpen={!!selectedDay}>
        <LeftColumn>
          <CalendarHeader>
            <CalendarTitle>
              {formattedMonth} <span>{formattedYear}</span>
            </CalendarTitle>

            <CalendarActions>
              <ActionButton onClick={handlePreviousMonth}>
                <CaretLeft size={20} />
              </ActionButton>

              <ActionButton onClick={handleNextMonth}>
                <CaretRight size={20} />
              </ActionButton>
            </CalendarActions>
          </CalendarHeader>

          <CalendarWeekDays>
            <Text size="sm">DOM.</Text>
            <Text size="sm">SEG.</Text>
            <Text size="sm">TER.</Text>
            <Text size="sm">QUA.</Text>
            <Text size="sm">QUI.</Text>
            <Text size="sm">SEX.</Text>
            <Text size="sm">SÁB.</Text>

            {emptyDaysBeforeTheFirstDay.map((emptyDay) => (
              <CalendarWeekDay key={emptyDay} disabled />
            ))}

            {days.map((day) => (
              <CalendarWeekDay
                key={day.day}
                day={day}
                selectDay={selectDay}
                selectedDay={selectedDay}
              />
            ))}
          </CalendarWeekDays>
        </LeftColumn>

        <RightColumn>
          <SchedulingTimes
            selectedDay={selectedDay?.day}
            currentDate={currentDate}
          />
        </RightColumn>
      </Calendar>
    </Container>
  )
}

export default Schedule

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const username = String(params?.username ?? '')

  const response = await api.getProfileByUsername({ username })

  return {
    props: {
      profile: response.data.profile,
    },
    revalidate: 60 * 60 * 24, // 1 day
  }
}
