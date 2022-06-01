import useSWR from 'swr'

const fetcher = async (url: any) => {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error('エラー')
  }
  const json = await response.json()
  return json
}

export const usePosts = (props: any = '') => {
  const { data, error } = useSWR(`https://jsonplaceholder.typicode.com/posts${`/${props}`}`, fetcher)
  console.log({ data, error })
  return { data, error, isLoading: !error && !data, isEmpty: data && data.length === 0 }
}
