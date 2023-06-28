import { useForm } from 'react-hook-form'

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
  const { register, handleSubmit, formState } = useForm<UsernameFormData>({
    resolver,
  })

  const handleReserveUsername = (data: UsernameFormData) => {
    console.log(data)
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
