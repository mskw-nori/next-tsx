import Link from 'next/link'

import { useCommentById } from '@/hooks/usePosts'

export const CommentByPostId = (props: any) => {
  const { data, error, isLoading, isEmpty } = useCommentById(props.id)
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
      {data.map((comment: any) => {
        return (
          <li key={comment.id}>
            <Link href={`/comments/${comment.id}`}>{comment.body}</Link>
          </li>
        )
      })}
    </ol>
  )
}
