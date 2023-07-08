import { useRouter } from 'next/router'
import { signIn, useSession } from 'next-auth/react'

import { ArrowRight, Check } from 'phosphor-react'

import { Button, Heading, MultiStep, Text } from '@ignite-ui-lucariozin/react'

import {
  Header,
  Container,
  ErrorMessage,
  ConnectGoogleCalendar,
  ConnectGoogleCalendarContainer,
} from './ConnectCalendar.styles'

const ConnectCalendar = () => {
  const router = useRouter()
  const { status } = useSession()

  const handleConnectCalendar = async () => await signIn('google')

  const handleNextStep = async () => {
    await router.push('/register/time-intervals')
  }

  const isAuthenticated = status === 'authenticated'
  const hasAuthError = !!router.query?.error

  return (
    <Container>
      <Header>
        <Heading as="h1">Conecte sua agenda!</Heading>

        <Text>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>

        <MultiStep size={4} currentStep={2} />
      </Header>

      <ConnectGoogleCalendarContainer>
        <ConnectGoogleCalendar>
          <Text as="span">Google Agenda</Text>

          {isAuthenticated ? (
            <Button
              type="button"
              size="sm"
              onClick={handleConnectCalendar}
              disabled={isAuthenticated}
            >
              Conectado <Check weight="bold" />
            </Button>
          ) : (
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={handleConnectCalendar}
            >
              Conectar <ArrowRight weight="bold" />
            </Button>
          )}
        </ConnectGoogleCalendar>

        {hasAuthError && (
          <ErrorMessage size="sm">
            Falha ao se conectar ao Google. Verifique se você habilitou as
            permissões de acesso ao Google Calendar.
          </ErrorMessage>
        )}

        <Button
          type="button"
          disabled={!isAuthenticated}
          onClick={handleNextStep}
        >
          Próximo passo <ArrowRight weight="bold" />
        </Button>
      </ConnectGoogleCalendarContainer>
    </Container>
  )
}

export default ConnectCalendar
