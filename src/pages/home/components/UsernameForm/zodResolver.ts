import * as z from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'

import { validateUsername } from '@/utils/validateFormInputs'

const zodValidationSchema = z.object({
  username: validateUsername(),
})

export const resolver = zodResolver(zodValidationSchema)

export type UsernameFormData = z.infer<typeof zodValidationSchema>
