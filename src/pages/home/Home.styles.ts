import Image from 'next/image'

import { styled, Heading, Text } from '@ignite-ui-lucariozin/react'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '$8',

  margin: '0 auto',
  padding: '0 0 0 $6',

  marginTop: 'calc((100vh - 27.625rem) / 2)',
})

export const Content = styled('div', {
  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  gap: '$2',

  width: '100%',
  maxWidth: '28rem',
  margin: '0 auto',

  [`& > ${Text}`]: {
    color: '$gray200',
  },

  '@media (max-width: 900px)': {
    [`& > ${Heading}`]: {
      fontSize: '$6xl',
    },

    [`& > ${Text}`]: {
      fontSize: '$md',
    },
  },
})

export const Preview = styled('div', {
  width: '100%',
  maxWidth: '44rem',

  userSelect: 'none',

  '& > img': {
    width: '100%',
    height: 'auto',
  },
})

export const LayoutGridImage = styled(Image, {
  position: 'absolute',
  zIndex: '-1',

  top: '-50%',
  left: '-50%',
})
