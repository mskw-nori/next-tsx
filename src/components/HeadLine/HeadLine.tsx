import classes from '@/components/HeadLine/HeadLine.module.css'

import type { FC, ReactNode } from 'react'

type Props = {
  page: string
  children: ReactNode
}

export const HeadLine: FC<Props> = ({ page, children }) => (
  <div>
    <h1 className={classes.title}>
      <a href="https://nextjs.org">{page} page!</a>
    </h1>

    <p className={classes.description}>Get started by editing {children}</p>
  </div>
)
