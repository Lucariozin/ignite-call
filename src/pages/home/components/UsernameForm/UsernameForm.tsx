import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useUser } from '@/contexts/User'

import { ArrowRight } from 'phosphor-react'
import { Button, TextInput } from '@ignite-ui-lucariozin/react'

import {
  Container,
  FormMessages,
  ErrorMessage,
  DefaultMessage,
} from './UsernameForm.styles'

import { resolver, UsernameFormData } from './zodResolver'

export const UsernameForm = () => {
  const router = useRouter()

  const { setUsername } = useUser()

  const { register, handleSubmit, formState } = useForm<UsernameFormData>({
    resolver,
  })

  const handleReserveUsername = async (data: UsernameFormData) => {
    const { username } = data

    setUsername(username)

    await router.push('/register')
  }

  const usernameErrorMessage = formState.errors.username?.message

  return (
    <>
      <Container as="form" onSubmit={handleSubmit(handleReserveUsername)}>
        <TextInput
          prefix="ignitecall.com/"
          placeholder="seu-usuario"
          {...register('username')}
        />

        <Button type="submit">
          Reservar <ArrowRight weight="bold" />
        </Button>
      </Container>

      <FormMessages>
        {usernameErrorMessage ? (
          <ErrorMessage size="sm">{usernameErrorMessage}</ErrorMessage>
        ) : (
          <DefaultMessage size="sm">
            Digite o nome de usuário desejado
          </DefaultMessage>
        )}
      </FormMessages>
    </>
  )
}
