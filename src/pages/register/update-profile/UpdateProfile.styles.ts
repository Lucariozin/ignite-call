import { Box, Text, TextArea, styled } from '@ignite-ui-lucariozin/react'

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

export const UpdateProfileContainer = styled(Box, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  marginTop: '$6',
})

export const ProfileImageContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
})

export const BioContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',

  [`& > ${TextArea}`]: {
    minHeight: '7.5rem',
  },
})

export const FormAnnotation = styled(Text, {
  color: '$gray200',
})
