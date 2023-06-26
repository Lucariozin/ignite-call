import { useForm } from 'react-hook-form'

import { ArrowRight } from 'phosphor-react'
import { Button, TextInput } from '@ignite-ui-lucariozin/react'

import {
  Container,
  FormMessages,
  ErrorMessage,
  DefaultMessage,
} from './UsernameForm.styles'

import { resolver, UsernameFormFields } from './zodResolver'

export const UsernameForm = () => {
  const { register, handleSubmit, formState } = useForm<UsernameFormFields>({
    resolver,
  })

  const handleReserveUsername = (data: UsernameFormFields) => {
    console.log(data)
  }

  const usernameErrorMessage = formState.errors.username?.message

  return (
    <>
      <Container as="form" onSubmit={handleSubmit(handleReserveUsername)}>
        <TextInput prefix="ignitecall.com/" {...register('username')} />

        <Button>
          Reservar <ArrowRight />
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
