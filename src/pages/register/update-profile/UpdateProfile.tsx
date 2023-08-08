import type { GetServerSideProps } from 'next'

import { Session, getServerSession } from 'next-auth'
import { buildNextAuthOptions } from '@/pages/api/auth/[...nextauth].api'

import zod from 'zod'

import { api } from '@/services/api'

import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

import {
  Text,
  Avatar,
  Button,
  Heading,
  TextArea,
  MultiStep,
} from '@ignite-ui-lucariozin/react'

import { ArrowRight } from 'phosphor-react'

import {
  Header,
  Container,
  BioContainer,
  FormAnnotation,
  ProfileImageContainer,
  UpdateProfileContainer,
} from './UpdateProfile.styles'

const profileValidationSchema = zod.object({
  bio: zod.string().trim(),
})

type ProfileData = zod.infer<typeof profileValidationSchema>

interface UpdateProfileProps {
  session?: Session
}

const UpdateProfile = ({ session }: UpdateProfileProps) => {
  const router = useRouter()

  const { register, handleSubmit } = useForm<ProfileData>()

  const username = session?.user?.username
  const userAvatarUrl = session?.user?.avatar_url

  const handleProfileUpdate = async (data: ProfileData) => {
    const response = await api.updateUserProfile({ profile: data })

    if (response.status !== 'success') return

    await router.push(`/schedule/${username}`)
  }

  return (
    <Container>
      <Header>
        <Heading as="h1">Quase lá</Heading>

        <Text>Por último, uma breve descrição e uma foto de perfil.</Text>

        <MultiStep size={4} currentStep={4} />
      </Header>

      <UpdateProfileContainer
        as="form"
        onSubmit={handleSubmit(handleProfileUpdate)}
      >
        <ProfileImageContainer>
          <Text size="sm">Foto de perfil</Text>

          <Avatar src={userAvatarUrl} />
        </ProfileImageContainer>

        <BioContainer>
          <Text as="label" htmlFor="user-bio" size="sm">
            Sobre você
          </Text>

          <TextArea id="user-bio" {...register('bio')} />

          <FormAnnotation size="sm">
            Fale um pouco sobre você. Isto será exibido em sua página pessoal.
          </FormAnnotation>
        </BioContainer>

        <Button type="submit">
          Finalizar <ArrowRight weight="bold" />
        </Button>
      </UpdateProfileContainer>
    </Container>
  )
}

export default UpdateProfile

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  return {
    props: {
      session,
    },
  }
}
