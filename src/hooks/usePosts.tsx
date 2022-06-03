import useSWR from 'swr'

const fetcher = async (url: any) => {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error('エラー')
  }
  const json = await response.json()
  return json
}

const API_URL = 'https://jsonplaceholder.typicode.com/'

const useFetchArray = (url: any) => {
  const { data, error } = useSWR(url, fetcher)
  return { data, error, isLoading: !error && !data, isEmpty: data && data.length === 0 }
}

export const usePost = (props: any = '') => {
  return useFetchArray(`${API_URL}posts${`/${props}`}`)
}

export const useUsers = () => {
  return useFetchArray(`${API_URL}users`)
}
export const useComments = () => {
  return useFetchArray(`${API_URL}comments`)
}

export const useCommentInfo = (userId: any) => {
  return useFetchArray(`${userId}` ? `${API_URL}comments/${userId}` : null)
}

export const useUserPost = (userId: any) => {
  return useFetchArray(`${userId}` ? `${API_URL}users/${userId}` : null)
}

export const useCommentById = (id: any) => {
  return useFetchArray(`${API_URL}comments?postId=${id}`)
}
