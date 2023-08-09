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

export const CalendarWeekDays = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '$1',
})

export const CalendarWeekDayColumn = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$1',

  width: '100%',

  [`& > ${Text}`]: {
    color: '$gray200',
    marginBottom: '$3',
  },
})

export const CalendarWeekDay = styled('div', {
  width: '100%',
  height: '50px',
  backgroundColor: '$gray200',
})
