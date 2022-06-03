import Head from 'next/head'

import { Header } from '@/components/Header/Header'
import { Posts } from '@/components/Posts/Posts'
import styles from '@/styles/Home.module.css'
import type { ExtendedNextPage } from '@/types'

const Home: ExtendedNextPage = props => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Posts />
    </div>
  )
}

export default Home