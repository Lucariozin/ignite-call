import type { GetStaticPaths, GetStaticProps } from 'next'

import { api } from '@/services/api'

import { Avatar, Heading, Text } from '@ignite-ui-lucariozin/react'

import { Container, ProfileContainer } from './Schedule.styles'

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
