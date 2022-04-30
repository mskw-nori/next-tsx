import Head from 'next/head'

import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import { Main } from '@/components/Main/Main'
import styles from '@/styles/Home.module.css'

import type { NextPage } from 'next'

const About: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>Create App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <Main title="about" />

    <Footer />
  </div>
)

export default About
