import { Text, styled } from '@ignite-ui-lucariozin/react'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',

  width: '$20',
  height: '$10',
  padding: '0 12px',

  borderRadius: '$sm',
  backgroundColor: '$gray900',

  transition: 'opacity 0.2s',

  [`& > ${Text}`]: {
    lineHeight: '$shorter',
  },

  '&:has(input:disabled)': {
    cursor: 'not-allowed',
    opacity: '0.5',
  },
})

export const Input = styled('input', {
  all: 'unset',

  width: '100%',
  maxWidth: '1rem',

  fontSize: '$sm',
  fontFamily: '$default',
  textAlign: 'right',

  appearance: 'textfield',

  '&::placeholder': {
    transition: 'color 0.2s',
  },

  '&:disabled::placeholder': {
    color: '$gray100',
  },

  '-moz-appearance': 'textfield',

  '&::-webkit-inner-spin-button': {
    '-webkit-appearance': 'none',
  },
})
