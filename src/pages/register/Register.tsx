import { Heading, MultiStep, Text } from '@ignite-ui-lucariozin/react'

import { RegisterForm } from './components/RegisterForm'

import { Container, Header } from './Register.styles'

const Register = () => {
  return (
    <Container>
      <Header>
        <Heading as="h1">Bem-vindo ao Ignite Call!</Heading>

        <Text>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </Text>

        <MultiStep size={4} currentStep={1} />
      </Header>

      <RegisterForm />
    </Container>
  )
}

export default Register
