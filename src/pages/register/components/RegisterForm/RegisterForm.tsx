import { useRouter } from 'next/router'

import { api } from '@/services/api'

import { useForm } from 'react-hook-form'
import { useUser } from '@/contexts/User'

import { ArrowRight } from 'phosphor-react'

import { Text, TextInput } from '@ignite-ui-lucariozin/react'
import { Container, ErrorMessage, NextStepButton } from './RegisterForm.styles'

import { resolver, RegisterFormData } from './zodResolver'

export const RegisterForm = () => {
  const router = useRouter()

  const { username } = useUser()

  const { register, handleSubmit, formState } = useForm<RegisterFormData>({
    defaultValues: { username: username ?? '' },
    resolver,
  })

  const handleCreateProfile = async ({ name, username }: RegisterFormData) => {
    const response = await api.createUser({ name, username })

    if (response.status !== 'success' || !response.data) return

    await router.push('/register/connect-calendar')
  }

  const usernameErrorMessage = formState.errors.username?.message
  const nameErrorMessage = formState.errors.name?.message

  const isSubmitting = formState.isSubmitting

  return (
    <Container as="form" onSubmit={handleSubmit(handleCreateProfile)}>
      <Text as="label" size="sm">
        <Text>Nome de usuário</Text>

        <TextInput
          prefix="ignitecall.com/"
          placeholder="seu-usuario"
          {...register('username')}
        />

        {!!usernameErrorMessage && (
          <ErrorMessage size="sm">{usernameErrorMessage}</ErrorMessage>
        )}
      </Text>

      <Text as="label" size="sm">
        <Text>Nome completo</Text>

        <TextInput placeholder="Seu nome" {...register('name')} />

        {!!nameErrorMessage && (
          <ErrorMessage size="sm">{nameErrorMessage}</ErrorMessage>
        )}
      </Text>

      <NextStepButton type="submit" disabled={isSubmitting}>
        Próximo passo <ArrowRight weight="bold" />
      </NextStepButton>
    </Container>
  )
}
