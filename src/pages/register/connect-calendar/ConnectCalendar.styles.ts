import { Box, Text, styled } from '@ignite-ui-lucariozin/react'

export const Container = styled('div', {
  maxWidth: '36.75rem',

  margin: '0 auto',
  marginTop: '6rem',
  padding: '0 $6',
})

export const Header = styled('header', {
  maxWidth: '30.75rem',
  margin: '0 auto',

  [`& > ${Text}`]: {
    margin: '$2 0 $6 0',
    color: '$gray200',
  },
})

export const ConnectGoogleCalendarContainer = styled(Box, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  marginTop: '$6',
})

export const ConnectGoogleCalendar = styled(Box, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  padding: '$4 $6',
})

export const ErrorMessage = styled(Text, {
  color: '#F75A68',
  marginBottom: '$2',
})
