import { Text, styled } from '@ignite-ui-lucariozin/react'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',

  [`& > ${Text} span`]: {
    color: '$gray200',
  },
})

export const Times = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
})

export const TimeItem = styled('button', {
  all: 'unset',

  padding: '$2',
  textAlign: 'center',
  lineHeight: '$base',

  fontFamily: '$default',
  fontSize: '$sm',

  borderRadius: '$sm',
  backgroundColor: '$gray600',

  cursor: 'pointer',
  userSelect: 'none',

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
