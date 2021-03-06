import Head from 'next/head'
import { useRouter } from 'next/router'
import { SWRConfig } from 'swr'

import { Header } from '@/components/Header/Header'
import { PostsByUserId } from '@/components/Posts/PostsByUserId'
import { useCommentInfo } from '@/hooks/usePosts'
import styles from '@/styles/Home.module.css'
import { API_URL } from '@/utills/API'

const UseComment = () => {
  const router = useRouter()
  const { data, error, isLoading } = useCommentInfo(router.query.id ? router.query.id : null)
  if (isLoading) {
    return <div>ローディング中</div>
  }
  if (error) {
    return <div>{error.message}</div>
  }
  return (
    <div>
      <h1>{data.body}</h1>
      <p>{data.name}</p>
      <p>{data.email}</p>
      <h2>元の記事</h2>
      <PostsByUserId id={data.id} />
    </div>
  )
}

export const getStaticPaths = async () => {
  const comments = await fetch(`${API_URL}comments?_limit=10`)
  const commentsData = await comments.json()
  const paths = commentsData.map((comment: any) => ({ params: { id: comment.id.toString() } }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async (ctx: any) => {
  const { id } = ctx.params
  const COMMENT_API_URL = `${API_URL}comments/${id}`
  const comment = await fetch(COMMENT_API_URL)

  if (!comment.ok) {
    return {
      notFound: true
    }
  }

  const commentData = await comment.json()

  return {
    props: {
      fallback: {
        [COMMENT_API_URL]: commentData
      }
    }
  }
}

const CommentsId = (props: any) => {
  const { fallback } = props

  return (
    <div className={styles.container}>
      <Head>
        <title>Create App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SWRConfig value={{ fallback }}>
        <Header />
        <UseComment />
      </SWRConfig>
    </div>
  )
}

export default CommentsId
