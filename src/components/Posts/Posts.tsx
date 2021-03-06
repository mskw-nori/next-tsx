import Link from 'next/link'
import React from 'react'

import { usePost } from '@/hooks/usePosts'

type User = {
  userId?: number
  id?: number
  title?: string
  body?: string
}

export const Posts = () => {
  const { data, error, isLoading, isEmpty } = usePost()

  if (isLoading) {
    return <div>ローディング中</div>
  }
  if (error) {
    return <div>{error.message}</div>
  }
  if (isEmpty) {
    return <div>データは空です</div>
  }

  return (
    <ol>
      {data.map((post: User) => {
        const { id, title } = post

        return (
          <li key={id}>
            <Link href={`posts/${id}`}>{title}</Link>
          </li>
        )
      })}
    </ol>
  )
}
