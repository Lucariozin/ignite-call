import { Heading, Text, styled } from '@ignite-ui-lucariozin/react'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  maxWidth: '36.75rem',

  margin: '0 auto',
  marginTop: '6rem',
  padding: '0 $6',
})

export const ProfileContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$1',

  [`& > ${Heading}`]: {
    marginTop: '$2',
  },

  [`& > ${Text}`]: {
    color: '$gray200',
  },
})
