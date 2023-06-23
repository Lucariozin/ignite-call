import { ArrowRight } from 'phosphor-react'
import { Button, TextInput } from '@ignite-ui-lucariozin/react'

import { Container } from './UsernameForm.styles'

export const UsernameForm = () => {
  return (
    <Container as="form">
      <TextInput prefix="ignitecall.com/" />

      <Button>
        Reservar <ArrowRight />
      </Button>
    </Container>
  )
}
