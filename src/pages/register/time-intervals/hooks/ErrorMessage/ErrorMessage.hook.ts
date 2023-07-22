import { useCallback, useContext } from 'react'

import { ErrorMessageContext } from './ErrorMessage.context'

type ShowErrorMessage = (params: { message: string; duration?: number }) => void

export const useErrorMessage = () => {
  const { error, duration, setError, setMessage, setDuration, ...state } =
    useContext(ErrorMessageContext)

  const showErrorMessage: ShowErrorMessage = useCallback(
    ({ message = '', duration = 5000 }) => {
      if (error) return

      setDuration(duration)
      setMessage(message)
      setError(true)

      setTimeout(() => {
        setError(false)
        setMessage('')
      }, duration)
    },
    [error, setDuration, setError, setMessage],
  )

  return { error, duration, showErrorMessage, ...state }
}
