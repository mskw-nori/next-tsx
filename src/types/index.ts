import { useCounter } from '@/hooks/useCounter'
import { useInputArray } from '@/hooks/useInputArray'

import type { NextPage } from 'next'

type AppInheritedProps = ReturnType<typeof useCounter> & ReturnType<typeof useInputArray>

export type ExtendedNextPage<T = {}, K = T> = NextPage<T & AppInheritedProps, K>
