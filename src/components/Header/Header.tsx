import Link from 'next/link'

import classes from '@/components/Header/Header.module.css'

import type { FC } from 'react'

export const Header: FC = () => (
  <header className={classes.header}>
    <Link href="/">
      <a className={classes.anchor}>Index</a>
    </Link>
    <Link href="/about">
      <a className={classes.anchor}>About</a>
    </Link>
  </header>
)
