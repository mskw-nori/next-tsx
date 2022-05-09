import { FC } from 'react'

import styles from '@/components/Links/Links.module.css'

type Linktype = { items: { href: string; title: string; description: string }[]; handleReduce: () => void }
export const Links: FC<Linktype> = ({ items, handleReduce }) => {
  return (
    <div className={styles.grid}>
      <button onClick={handleReduce}>減らす</button>
      {items.map(item => {
        return (
          <a key={item.href} href={item.href} className={styles.card}>
            <h2>{item.title} &rarr;</h2>
            <p>{item.description}</p>
          </a>
        )
      })}
    </div>
  )
}
