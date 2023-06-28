import * as z from 'zod'

import { messages } from '@/utils/formErrorMessages'

export const validateUsername = () => {
  return z
    .string()
    .min(3, { message: messages.INVALID_MIN_LENGTH })
    .regex(/^([a-z\\-]+)$/i, { message: messages.INVALID_CHARACTERS })
    .transform((username) => username.toLowerCase())
}

export const validateFullname = () => {
  return z
    .string()
    .min(3, { message: messages.INVALID_MIN_LENGTH })
    .regex(/^([a-zA-Z\\' ']+)$/g, { message: messages.INVALID_CHARACTERS })
    .trim()
    .refine((name) => name.split(' ').length > 1, {
      message: messages.INVALID_FULL_NAME,
    })
    .transform((name) =>
      name
        .split(' ')
        .filter((char) => !!char.length)
        .join(' '),
    )
    .refine(
      (name) => !name.split(' ').some((namePart) => namePart.length < 3),
      { message: messages.INVALID_FULL_NAME_LENGTH },
    )
}
