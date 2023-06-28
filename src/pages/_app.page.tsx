import type { AppProps } from 'next/app'

import { UserProvider } from '@/contexts/User'

import { globalStyles } from '@/styles/global'

globalStyles()

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default App
