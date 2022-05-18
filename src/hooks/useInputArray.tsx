import React, { ChangeEvent, useCallback, useState } from 'react'

export const useInputArray = () => {
  const [text, setText] = useState('')
  const [array, setArray] = useState<string[]>([])

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    e.target.value.length <= 5 ? setText(e.target.value) : alert('五文字以内の入力')
  }, [])

  const handleAdd = useCallback(
    (e: React.MouseEvent) => {
      setArray(array.includes(text) ? (alert('既に存在します'), array) : [...array, text])
      // setArray(prevArray => {
      //   if (prevArray.includes(text)) {
      //     alert('既に存在します')
      //     return prevArray
      //   }
      //   return [...prevArray, text]
      // })
    },
    [text, array]
  )
  return { text, array, handleChange, handleAdd }
}
