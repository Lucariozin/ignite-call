import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'

type UserContextState = {
  username: string | null
  setUsername: Dispatch<SetStateAction<string | null>>
}

const initialState: UserContextState = {
  username: null,
  setUsername: () => {},
}

const UserContext = createContext(initialState)

interface UserProviderProps {
  children: ReactNode
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [username, setUsername] = useState<UserContextState['username']>(null)

  const value: UserContextState = {
    username,
    setUsername,
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export const useUser = () => useContext(UserContext)
