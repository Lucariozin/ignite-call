import { Box, Heading, Text, styled } from '@ignite-ui-lucariozin/react'

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

export const Calendar = styled(Box, {
  width: '100%',
  marginTop: '$6',
})

export const LeftColumn = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',

  width: '100%',
  maxWidth: '33.75rem',
})

export const RightColumn = styled('div', {})

export const CalendarHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const CalendarTitle = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$1',

  fontWeight: '$medium',

  [`& > ${Text}:last-child`]: {
    color: '$gray200',
  },
})

export const CalendarActions = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',

  color: '$gray200',
})

export const ActionButton = styled('button', {
  all: 'unset',

  padding: '1px',
  lineHeight: '0',

  cursor: 'pointer',
  borderRadius: '50%',

  transition: 'all 0.2s',

  '&:hover': {
    backgroundColor: '$igniteWeak',
    filter: 'brightness(1.2)',
  },

  '&:focus-visible': {
    boxShadow: '0 0 0 1px $colors$ignite500',
  },
})

export const CalendarWeekDays = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gap: '$1',

  [`& > ${Text}`]: {
    textAlign: 'center',
    marginBottom: '$3',
    color: '$gray200',
  },
})

export const CalendarWeekDay = styled('button', {
  all: 'unset',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
  aspectRatio: '1 / 1',

  fontFamily: '$default',

  backgroundColor: '$gray600',
  borderRadius: '$sm',

  cursor: 'pointer',
  transition: 'all 0.1s',

  '&:disabled': {
    opacity: '0.5',
    backgroundColor: 'transparent',
    cursor: 'default',
  },

  '&:not(:disabled):hover': {
    backgroundColor: '$gray500',
  },

  '&:focus-visible': {
    boxShadow: '0 0 0 1px $colors$ignite500',
  },
})
