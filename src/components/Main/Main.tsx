import { FC, useCallback, useState } from 'react'

import { HeadLine } from '@/components/HeadLine/HeadLine'
import { Links } from '@/components/Links/Links'
import styles from '@/components/Main/Main.module.css'

type Props = {
  title: string
}

const ITEMS = [
  {
    href: 'https://nextjs.org/docs',
    title: 'Documentation',
    description: 'Find in-depth information about Next.js features and API.'
  },
  {
    href: 'https://nextjs.org/learn',
    title: 'Learn',
    description: 'Learn about Next.js in an interactive course with quizzes!'
  },
  {
    href: 'https://github.com/vercel/next.js/tree/canary/examples',
    title: 'Examples',
    description: 'Discover and deploy boilerplate example Next.js projects.'
  },
  {
    href: 'https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
    title: 'Deploy',
    description: 'Instantly deploy your Next.js site to a public URL with Vercel.'
  }
]

export const Main: FC<Props> = ({ title }) => {
  const [items, setItems] = useState(ITEMS)
  const handleReduce = useCallback(() => {
    setItems(prevItems => {
      return prevItems.slice(0, prevItems.length - 1)
    })
  }, [])
  return (
    <main className={styles.main}>
      <HeadLine page={title}>
        <code className={styles.code}>pages/{title}.js</code>
      </HeadLine>
      <p>現在のリンクは{items.length}個です</p>
      <Links items={items} handleReduce={handleReduce} />
    </main>
  )
}
