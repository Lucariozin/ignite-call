import { ArrowRight } from 'phosphor-react'

import { Button, Heading, MultiStep, Text } from '@ignite-ui-lucariozin/react'

import {
  Header,
  Container,
  ConnectGoogleCalendar,
  ConnectGoogleCalendarContainer,
} from './ConnectCalendar.styles'

const ConnectCalendar = () => {
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

          <Button type="button" variant="secondary" size="sm">
            Conectar <ArrowRight weight="bold" />
          </Button>
        </ConnectGoogleCalendar>

        <Button type="button" disabled>
          Próximo passo <ArrowRight weight="bold" />
        </Button>
      </ConnectGoogleCalendarContainer>
    </Container>
  )
}

export default ConnectCalendar
