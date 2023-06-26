import { ArrowRight } from 'phosphor-react'

import {
  Button,
  Heading,
  MultiStep,
  Text,
  TextInput,
} from '@ignite-ui-lucariozin/react'

import { Container, Header, RegisterForm } from './Register.styles'

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

      <RegisterForm as="form">
        <Text as="label" size="sm">
          Nome de usuário
          <TextInput prefix="ignitecall.com/" placeholder="seu-usuario" />
        </Text>

        <Text as="label" size="sm">
          Nome completo
          <TextInput placeholder="Seu nome" />
        </Text>

        <Button type="submit">
          Próximo passo <ArrowRight weight="bold" />
        </Button>
      </RegisterForm>
    </Container>
  )
}

export default Register
