import React, { useCallback, useState } from 'react'

export const useCounter = () => {
  const [count, setCount] = useState(0)
  const [isShow, setIsShow] = useState(false)

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      count < 10 ? setCount(count => count + 1) : setCount(count)
      count % 2 === 1 ? setIsShow(true) : setIsShow(false)
    },
    [count]
  )
  // const handleClick = () => {
  //   setCount(count => count + 1)
  // }

  return { count, handleClick, isShow }
}
