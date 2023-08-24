import { styled } from '@ignite-ui-lucariozin/react'

export const Container = styled('button', {
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

  variants: {
    isSelected: {
      true: {
        backgroundColor: '$igniteWeak',
        boxShadow: '0 0 0 1px $colors$ignite500',
      },
      false: {
        '&:not(:disabled):hover': {
          backgroundColor: '$gray500',
        },

        '&:focus-visible': {
          boxShadow: '0 0 0 1px $colors$ignite500',
        },
      },
    },
  },
})
