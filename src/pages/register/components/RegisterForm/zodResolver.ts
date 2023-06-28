import * as z from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'

import { validateFullname, validateUsername } from '@/utils/validateFormInputs'

const zodValidationSchema = z.object({
  username: validateUsername(),
  name: validateFullname(),
})

export const resolver = zodResolver(zodValidationSchema)

export type RegisterFormData = z.infer<typeof zodValidationSchema>
