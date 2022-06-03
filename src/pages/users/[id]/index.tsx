import Head from 'next/head'
import { useRouter } from 'next/router'

import { Header } from '@/components/Header/Header'
import { useUserPost } from '@/hooks/usePosts'
import styles from '@/styles/Home.module.css'
import type { ExtendedNextPage } from '@/types'

const UseUser = () => {
  const router = useRouter()
  const { data, error, isLoading } = useUserPost(router.query.id ? router.query.id : null)
  if (isLoading) {
    return <div>ローディング中</div>
  }
  if (error) {
    return <div>{error.message}</div>
  }
  return <div>{data.name}</div>
}

const PostId: ExtendedNextPage = props => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <UseUser />
    </div>
  )
}

export default PostId
