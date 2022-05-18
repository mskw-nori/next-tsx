import Link from 'next/link'

import classes from '@/components/Header/Header.module.css'

import type { FC } from 'react'

export const Header: FC = () => {
  const navitems = [
    { href: '/', label: 'Index' },
    { href: '/about', label: 'About' }
  ]
  return (
    <header className={classes.header}>
      {navitems.map(item => {
        return (
          <Link key={item.href} href={item.href}>
            <a className={classes.anchor}>{item.label}</a>
          </Link>
        )
      })}

      {/* <header className={classes.header}>
      <Link href="/">
        <a className={classes.anchor}>Index</a>
      </Link>
      <Link href="/about">
        <a className={classes.anchor}>About</a>
      </Link> */}
    </header>
  )
}
