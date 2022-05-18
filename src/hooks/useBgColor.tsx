import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const useBgColor = () => {
  const router = useRouter()
  const bgColor = router.pathname === '/' ? 'lightblue' : 'beige'
  useEffect(() => {
    document.body.style.backgroundColor = bgColor
    return () => {
      document.body.style.backgroundColor = ''
    }
  }, [bgColor])
}
