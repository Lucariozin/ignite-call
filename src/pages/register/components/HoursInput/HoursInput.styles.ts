import { Text, styled } from '@ignite-ui-lucariozin/react'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',

  width: '$20',
  height: '$10',
  padding: '0 12px',

  borderRadius: '$sm',
  backgroundColor: '$gray900',

  [`& > ${Text}`]: {
    lineHeight: '$shorter',
  },
})

export const Input = styled('input', {
  all: 'unset',

  width: '100%',
  maxWidth: '1rem',

  fontSize: '$sm',
  fontFamily: '$default',

  appearance: 'textfield',

  '-moz-appearance': 'textfield',

  '&::-webkit-inner-spin-button': {
    '-webkit-appearance': 'none',
  },
})
