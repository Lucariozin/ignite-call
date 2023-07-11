import type { ChangeEvent, FocusEvent, KeyboardEvent } from 'react'

import { Text } from '@ignite-ui-lucariozin/react'

import { Container, Input } from './HoursInput.styles'

interface HoursInputProps {
  value: string
  disabled?: boolean

  setValue: (value: string) => void
}

export const HoursInput = ({
  value,
  disabled = false,

  setValue,
}: HoursInputProps) => {
  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    const typedValue = event.target.value

    const typedValueAsNumber = Number(typedValue)

    if (typedValue.includes(' ')) return
    if (typedValue.length > 2) return
    if (isNaN(typedValueAsNumber)) return

    if (typedValueAsNumber > 23) return setValue('23')

    if (typedValueAsNumber < 0) return setValue('00')

    setValue(typedValue)
  }

  const handleFilterCharacters = (event: KeyboardEvent<HTMLInputElement>) => {
    const unauthorizedCharacteres = ['e', 'E', '-', '+', ',', '.']

    const keyPressed = event.key

    if (!unauthorizedCharacteres.includes(keyPressed)) return

    event.preventDefault()
  }

  const handleNormalizeDisplayedValue = (
    event: FocusEvent<HTMLInputElement, Element>,
  ) => {
    const typedValue = event.target.value

    if (!typedValue.length) return

    const normalizedValue = typedValue.padStart(2, '0')

    setValue(normalizedValue)
  }

  return (
    <Container>
      <Input
        type="number"
        placeholder="00"
        value={value}
        onChange={handleChangeValue}
        onKeyDown={handleFilterCharacters}
        onBlur={handleNormalizeDisplayedValue}
        disabled={disabled}
      />

      <Text size="sm">:00h</Text>
    </Container>
  )
}
