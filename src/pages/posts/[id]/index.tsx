import Head from 'next/head'
import { useRouter } from 'next/router'

import { CommentByPostId } from '@/components/Comments/CommentsByPostId'
import { Header } from '@/components/Header/Header'
import { usePost, useUserPost } from '@/hooks/usePosts'
import styles from '@/styles/Home.module.css'
import type { ExtendedNextPage } from '@/types'

const PostId: ExtendedNextPage = props => {
  const router = useRouter()
  const { data: post } = usePost(router?.query.id)
  const { data: user } = useUserPost(post?.userId)
  return (
    <div className={styles.container}>
      <Head>
        <title>Create App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div>
        <h1>{post?.title}</h1>
        <p>{post?.body}</p>
        {user?.name ? <div>Created by {user.name}</div> : null}
        <p>記事へのコメント</p>

        <CommentByPostId id={post?.id} />
      </div>
    </div>
  )
}

export default PostId
