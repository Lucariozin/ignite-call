import * as z from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'

const messages = {
  INVALID_MIN_LENGTH: 'Precisa conter pelo menos 3 caractéres',
  INVALID_CHARACTERS: 'Não utilize caractéres especiais',
}

const zodValidationSchema = z.object({
  username: z
    .string()
    .min(3, { message: messages.INVALID_MIN_LENGTH })
    .regex(/^([a-z\\-]+)$/i, { message: messages.INVALID_CHARACTERS })
    .transform((username) => username.toLowerCase()),
})

export const resolver = zodResolver(zodValidationSchema)

export type UsernameFormFields = z.infer<typeof zodValidationSchema>
