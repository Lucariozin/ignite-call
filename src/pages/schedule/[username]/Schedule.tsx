import type { GetStaticPaths, GetStaticProps } from 'next'

import { useState } from 'react'

import { api } from '@/services/api'

import { CaretLeft, CaretRight } from 'phosphor-react'
import { Avatar, Heading, Text } from '@ignite-ui-lucariozin/react'

import {
  Calendar,
  Container,
  LeftColumn,
  ActionButton,
  CalendarTitle,
  CalendarHeader,
  CalendarActions,
  CalendarWeekDay,
  CalendarWeekDays,
  ProfileContainer,
  RightColumn,
} from './Schedule.styles'

type Profile = {
  name: string
  username: string
  avatarUrl: string
  bio: string
}

interface ScheduleProps {
  profile: Profile
}

const Schedule = ({ profile }: ScheduleProps) => {
  const [schedulingTimesIsOpen, setSchedulingTimesIsOpen] = useState(false)

  return (
    <Container>
      <ProfileContainer>
        <Avatar src={profile.avatarUrl} />

        <Heading as="h1">{profile.name}</Heading>

        <Text>{profile.bio}</Text>
      </ProfileContainer>

      <Calendar schedulingTimesIsOpen={schedulingTimesIsOpen}>
        <LeftColumn>
          <CalendarHeader>
            <CalendarTitle>
              <Text>Setembro</Text>

              <Text>2022</Text>
            </CalendarTitle>

            <CalendarActions>
              <ActionButton>
                <CaretLeft size={20} />
              </ActionButton>

              <ActionButton>
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

            <CalendarWeekDay
              onClick={() => setSchedulingTimesIsOpen((state) => !state)}
            >
              1
            </CalendarWeekDay>
            <CalendarWeekDay disabled>2</CalendarWeekDay>
            <CalendarWeekDay>3</CalendarWeekDay>
            <CalendarWeekDay />
            <CalendarWeekDay />

            <CalendarWeekDay />
            <CalendarWeekDay />
            <CalendarWeekDay />
            <CalendarWeekDay />
            <CalendarWeekDay />

            <CalendarWeekDay />
            <CalendarWeekDay />
            <CalendarWeekDay />
            <CalendarWeekDay />
            <CalendarWeekDay />

            <CalendarWeekDay />
            <CalendarWeekDay />
            <CalendarWeekDay />
            <CalendarWeekDay />
            <CalendarWeekDay />

            <CalendarWeekDay />
            <CalendarWeekDay />
            <CalendarWeekDay />
            <CalendarWeekDay />
            <CalendarWeekDay />

            <CalendarWeekDay />
            <CalendarWeekDay />
            <CalendarWeekDay />
            <CalendarWeekDay />
            <CalendarWeekDay />

            <CalendarWeekDay />
            <CalendarWeekDay />
            <CalendarWeekDay />
            <CalendarWeekDay />
            <CalendarWeekDay />
          </CalendarWeekDays>
        </LeftColumn>

        <RightColumn>Hello People</RightColumn>
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
