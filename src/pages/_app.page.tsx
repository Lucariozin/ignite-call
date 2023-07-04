import { SessionProvider } from 'next-auth/react'

import { UserProvider } from '@/contexts/User'

import { globalStyles } from '@/styles/global'

import type { AppProps } from 'next/app'

globalStyles()

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider session={pageProps.session}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </SessionProvider>
  )
}

export default App
