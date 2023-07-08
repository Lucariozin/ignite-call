import { styled } from '@ignite-ui-lucariozin/react'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  padding: '$3 $4',

  '& + &': {
    borderTop: '1px solid $gray600',
  },
})

export const WeekDay = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
})

export const Schedules = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
})
