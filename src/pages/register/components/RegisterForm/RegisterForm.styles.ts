import { Box, Button, Text, styled } from '@ignite-ui-lucariozin/react'

export const Container = styled(Box, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',

  marginTop: '$6',

  label: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$2',
  },
})

export const ErrorMessage = styled(Text, {
  margin: '4px 0 -$3 0',
  lineHeight: '0',
  color: '#FF9F3E',
})

export const NextStepButton = styled(Button, {
  marginTop: '$2',
})
