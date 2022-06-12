import type { AppProps } from 'next/app'
import { interpret } from 'xstate'
import { useActor } from '@xstate/react'

import { appMachine } from '@/machines/app'
import '@/styles/globals.css'

export const appService = interpret(appMachine)

appService.start()

export const useAppMachine = () => useActor(appService)

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
