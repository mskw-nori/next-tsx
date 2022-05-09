import '@/styles/globals.css'
import React from 'react'

import { useBgLightBlue } from '@/hooks/useBgLightBlue'
import { useCounter } from '@/hooks/useCounter'
import { useInputArray } from '@/hooks/useInputArray'

import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  const counter = useCounter()

  const inputArray = useInputArray()

  useBgLightBlue(counter.count)

  return <Component {...pageProps} {...counter} {...inputArray} />
}

export default App
