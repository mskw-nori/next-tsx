import useSWRImmutable from 'swr/immutable'

const API_URL = 'https://jsonplaceholder.typicode.com/'

const useFetchArray = (url: any) => {
  const { data, error } = useSWRImmutable(url)
  return { data, error, isLoading: !error && !data, isEmpty: data && data.length === 0 }
}

export const usePost = (id: any = '') => {
  return useFetchArray(`${API_URL}posts/${id}`)
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
  return useFetchArray(id ? `${API_URL}comments?postId=${id}` : null)
}
export const usePostsByUserId = (id: any) => {
  return useFetchArray(id ? `${API_URL}posts?userId=${id}` : null)
}
