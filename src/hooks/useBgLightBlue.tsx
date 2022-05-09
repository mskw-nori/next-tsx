import { useEffect } from 'react'

export const useBgLightBlue = (count: number) => {
  useEffect(() => {
    console.log(`マウント時${count}`)
    document.body.style.backgroundColor = 'lightblue'
    return () => {
      console.log(`アンマウント時${count}`)

      document.body.style.backgroundColor = ''
    }
  }, [count])
}
