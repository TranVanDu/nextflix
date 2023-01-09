import {
  useQuery,
  type UseQueryOptions,
  type QueryFunctionContext
} from 'react-query'
import { axiosClientTmdb } from '../services'
import type { IMovieList } from '../interfaces'

export const useQueryMovieList = (
  networkId: string,
  language: string,
  page?: string,
  opitions?: UseQueryOptions<IMovieList>
) => {
  return useQuery<IMovieList>(
    ['movie list', networkId, language, page ?? '1'],
    getMovieList,
    opitions
  )
}

export const getMovieList = async (
  ctx: QueryFunctionContext
): Promise<IMovieList> => {
  const [, networkId, language, page] = ctx.queryKey
  const { data } = await axiosClientTmdb.get('discover/tv', {
    params: { with_networks: networkId, language, page }
  })
  return data
}
