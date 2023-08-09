import type { GetStaticPaths, GetStaticProps } from 'next'

import { api } from '@/services/api'

import { CaretLeft, CaretRight } from 'phosphor-react'
import { Avatar, Heading, Text } from '@ignite-ui-lucariozin/react'

import {
  Calendar,
  Container,
  LeftColumn,
  CalendarTitle,
  CalendarHeader,
  CalendarActions,
  CalendarWeekDay,
  CalendarWeekDays,
  ProfileContainer,
  CalendarWeekDayColumn,
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
  return (
    <Container>
      <ProfileContainer>
        <Avatar src={profile.avatarUrl} />

        <Heading as="h1">{profile.name}</Heading>

        <Text>{profile.bio}</Text>
      </ProfileContainer>

      <Calendar>
        <LeftColumn>
          <CalendarHeader>
            <CalendarTitle>
              <Text>Setembro</Text>

              <Text>2022</Text>
            </CalendarTitle>

            <CalendarActions>
              <CaretLeft size={20} />

              <CaretRight size={20} />
            </CalendarActions>
          </CalendarHeader>

          <CalendarWeekDays>
            <CalendarWeekDayColumn>
              <Text size="sm">DOM.</Text>

              <CalendarWeekDay />
              <CalendarWeekDay />
              <CalendarWeekDay />
              <CalendarWeekDay />
              <CalendarWeekDay />
            </CalendarWeekDayColumn>

            <CalendarWeekDayColumn>
              <Text size="sm">SEG.</Text>

              <CalendarWeekDay />
              <CalendarWeekDay />
              <CalendarWeekDay />
              <CalendarWeekDay />
              <CalendarWeekDay />
            </CalendarWeekDayColumn>

            <CalendarWeekDayColumn>
              <Text size="sm">TER.</Text>

              <CalendarWeekDay />
              <CalendarWeekDay />
              <CalendarWeekDay />
              <CalendarWeekDay />
              <CalendarWeekDay />
            </CalendarWeekDayColumn>

            <CalendarWeekDayColumn>
              <Text size="sm">QUA.</Text>

              <CalendarWeekDay />
              <CalendarWeekDay />
              <CalendarWeekDay />
              <CalendarWeekDay />
              <CalendarWeekDay />
            </CalendarWeekDayColumn>

            <CalendarWeekDayColumn>
              <Text size="sm">QUI.</Text>

              <CalendarWeekDay />
              <CalendarWeekDay />
              <CalendarWeekDay />
              <CalendarWeekDay />
              <CalendarWeekDay />
            </CalendarWeekDayColumn>

            <CalendarWeekDayColumn>
              <Text size="sm">SEX.</Text>

              <CalendarWeekDay />
              <CalendarWeekDay />
              <CalendarWeekDay />
              <CalendarWeekDay />
              <CalendarWeekDay />
            </CalendarWeekDayColumn>

            <CalendarWeekDayColumn>
              <Text size="sm">SÁB.</Text>

              <CalendarWeekDay />
              <CalendarWeekDay />
              <CalendarWeekDay />
              <CalendarWeekDay />
              <CalendarWeekDay />
            </CalendarWeekDayColumn>
          </CalendarWeekDays>
        </LeftColumn>
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
