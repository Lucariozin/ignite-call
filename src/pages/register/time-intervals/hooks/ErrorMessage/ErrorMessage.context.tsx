import { useState, createContext } from 'react'
import type { Dispatch, ReactNode, SetStateAction } from 'react'

type ErrorMessageState = {
  error: boolean
  message: string
  duration: number

  setError: Dispatch<SetStateAction<boolean>>
  setMessage: Dispatch<SetStateAction<string>>
  setDuration: Dispatch<SetStateAction<number>>
}

const defaultState: ErrorMessageState = {
  error: false,
  message: '',
  duration: 0,

  setError: () => {},
  setMessage: () => {},
  setDuration: () => {},
}

export const ErrorMessageContext = createContext(defaultState)

interface ErrorMessageProviderProps {
  children: ReactNode
}

export const ErrorMessageProvider = ({
  children,
}: ErrorMessageProviderProps) => {
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')
  const [duration, setDuration] = useState(5000)

  const value = {
    error,
    message,
    duration,

    setError,
    setMessage,
    setDuration,
  }

  return (
    <ErrorMessageContext.Provider value={value}>
      {children}
    </ErrorMessageContext.Provider>
  )
}
