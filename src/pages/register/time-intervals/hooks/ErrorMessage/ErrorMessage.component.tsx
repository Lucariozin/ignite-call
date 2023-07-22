import { Text, keyframes, styled } from '@ignite-ui-lucariozin/react'

import { useErrorMessage } from './ErrorMessage.hook'

const messageAnimation = keyframes({
  '0%': {
    opacity: '0',
  },
  '10%': {
    opacity: '1',
  },
  '90%': {
    opacity: '1',
  },
  '100%': {
    opacity: '0',
  },
})

const Container = styled('div', {
  [`& ${Text}`]: {
    width: 'fit-content',

    padding: '$2 $4',
    margin: '0 auto',

    borderRadius: '$sm',
    background: '#AA0000DD',
  },

  userSelect: 'none',
  animation: `${messageAnimation} var(--duration) forwards`,
})

export const ErrorMessage = () => {
  const { error, message, duration } = useErrorMessage()

  if (!error) return null

  return (
    <Container css={{ '--duration': `${duration}ms` }}>
      <Text size="sm">{message}</Text>
    </Container>
  )
}
