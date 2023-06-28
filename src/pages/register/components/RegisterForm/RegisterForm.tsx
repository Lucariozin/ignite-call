import { useForm } from 'react-hook-form'

import { ArrowRight } from 'phosphor-react'

import { Text, TextInput } from '@ignite-ui-lucariozin/react'

import { Container, ErrorMessage, NextStepButton } from './RegisterForm.styles'

import { resolver, RegisterFormData } from './zodResolver'

export const RegisterForm = () => {
  const { register, handleSubmit, formState } = useForm<RegisterFormData>({
    resolver,
  })

  const handleCreateProfile = (data: RegisterFormData) => {
    console.log(data)
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
