import useSWR from 'swr'

const fetcher = async (url: any) => {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error('エラー')
  }
  const json = await response.json()
  return json
}
export const useUserPost = (userId: any) => {
  const { data: user, error: userError } = useSWR(`${userId}` ? `https://jsonplaceholder.typicode.com/users/${userId}` : null, fetcher)
  console.log(user, userError)
  return { user, userError }
}
