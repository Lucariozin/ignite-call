import Image from 'next/image'
import { Heading, Text } from '@ignite-ui-lucariozin/react'

import appPreviewImage from '@/assets/app-preview.png'
import layoutGridImage from '@/assets/layout-grid.svg'

import { UsernameForm } from './components/UsernameForm'

import { Container, Content, Preview, LayoutGridImage } from './Home.styles'

const Home = () => {
  return (
    <Container>
      <Content>
        <Heading as="h1" size="4xl">
          Agendamento descomplicado
        </Heading>

        <Text size="xl">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>

        <UsernameForm />

        <LayoutGridImage
          src={layoutGridImage}
          alt=""
          width={1042}
          height={616}
          quality={100}
          priority
        />
      </Content>

      <Preview>
        <Image
          src={appPreviewImage}
          alt="Pré-visualização da interface da aplicação"
          width={704}
          height={442}
          quality={100}
          priority
        />
      </Preview>
    </Container>
  )
}

export default Home
