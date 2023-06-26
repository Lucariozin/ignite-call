import { Box, Text, styled } from '@ignite-ui-lucariozin/react'

export const Container = styled(Box, {
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  gap: '$2',

  padding: '$4',
  marginTop: '$4',
})

export const FormMessages = styled('div', {})

export const DefaultMessage = styled(Text, {
  color: '$gray400',
})

export const ErrorMessage = styled(Text, {
  color: '#FF9F3E',
})
