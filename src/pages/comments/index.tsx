import Head from 'next/head'
import Link from 'next/link'

import { Header } from '@/components/Header/Header'
import { useComments } from '@/hooks/usePosts'
import styles from '@/styles/Home.module.css'
import type { ExtendedNextPage } from '@/types'

type user = {
  id: number
  name: string
  body: string
}

const CommentComponent = () => {
  const { data, error, isLoading, isEmpty } = useComments()
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
      {data.map((comment: user) => {
        return (
          <li key={comment.id}>
            <Link href={`/comments/${comment.id}`}>
              <a>{`${comment.body}}`}</a>
            </Link>
          </li>
        )
      })}
    </ol>
  )
}

const Comments: ExtendedNextPage = props => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <CommentComponent />
    </div>
  )
}

export default Comments
