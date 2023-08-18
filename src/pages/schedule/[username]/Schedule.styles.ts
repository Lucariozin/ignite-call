import { Box, Heading, Text, styled } from '@ignite-ui-lucariozin/react'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

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

export const Calendar = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',

  width: '100%',

  margin: '0 auto',
  marginTop: '$6',

  variants: {
    schedulingTimesIsOpen: {
      true: {
        '& > div:first-child': {
          borderRight: 'none',
          borderTopRightRadius: '0',
          borderBottomRightRadius: '0',
        },

        '& > div:last-child': {
          display: 'block',

          opacity: '1',
          width: '100%',

          borderTopLeftRadius: '0',
          borderBottomLeftRadius: '0',
        },
      },
      false: {
        '& > div:first-child': {
          marginLeft: '3.125rem',
        },
      },
    },
  },
})

export const LeftColumn = styled(Box, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',

  width: '100%',
  maxWidth: '33.75rem',

  padding: '$6',

  transition: 'margin 0.3s ease-in-out',
})

export const RightColumn = styled(Box, {
  opacity: '0',
  width: '0',

  maxWidth: '17.5rem',
  maxHeight: '30.45rem',
  padding: '$6',

  borderLeft: '1px solid $colors$gray600',
  transition: 'opacity 0.3s, width 0.5s',

  overflowY: 'scroll',

  '&::-webkit-scrollbar': {
    width: '14px',
  },

  '&::-webkit-scrollbar-thumb': {
    border: '5px solid $colors$gray800',
    borderRadius: '$full',
    background: '$gray500',
  },
})

export const CalendarHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const CalendarTitle = styled(Text, {
  display: 'flex',
  alignItems: 'center',
  gap: '$1',

  fontWeight: '$medium',
  textTransform: 'capitalize',

  [`& > span`]: {
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
  userSelect: 'none',
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
