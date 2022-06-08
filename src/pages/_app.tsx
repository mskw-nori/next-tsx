// import 'tailwindcss/tailwind.css'
import '@/styles/globals.css'
import React from 'react'
import { SWRConfig } from 'swr'

import { useBgColor } from '@/hooks/useBgColor'
import { useCounter } from '@/hooks/useCounter'
import { useInputArray } from '@/hooks/useInputArray'

import type { AppProps } from 'next/app'

const fetcher = async (url: any) => {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error('エラー')
  }
  const json = await response.json()
  return json
}

const App = ({ Component, pageProps }: AppProps) => {
  const counter = useCounter()

  const inputArray = useInputArray()

  useBgColor()

  return (
    <SWRConfig value={{ fetcher }}>
      <Component {...pageProps} {...counter} {...inputArray} />
    </SWRConfig>
  )
}

export default App
