import { FC } from 'react'

import { HeadLine } from '@/components/HeadLine/HeadLine'
import { Links } from '@/components/Links/Links'
import styles from '@/components/Main/Main.module.css'

type Props = {
  title: string
}

export const Main: FC<Props> = ({ title }) => (
  <main className={styles.main}>
    <HeadLine page={title}>
      <code className={styles.code}>pages/{title}.js</code>
    </HeadLine>
    <Links />
  </main>
)
