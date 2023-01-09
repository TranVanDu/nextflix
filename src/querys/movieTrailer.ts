import {
  useQuery,
  type UseQueryOptions,
  type QueryFunctionContext
} from 'react-query'
import { axiosClientTmdb } from '../services'
import type { IMovieTrailer } from '../interfaces'

export const useQueryMovieTrailer = (
  movieId: string,
  language: string,
  opitions?: UseQueryOptions<IMovieTrailer>
) => {
  return useQuery<IMovieTrailer>(
    ['movie trailer', movieId, language],
    getMovieTrailer,
    opitions
  )
}

export const getMovieTrailer = async (
  ctx: QueryFunctionContext
): Promise<IMovieTrailer> => {
  const [, movieId, language] = ctx.queryKey
  const {
    data: { results }
  } = await axiosClientTmdb.get(`tv/${movieId}/videos`, {
    params: { language }
  })
  return results.filter((item: any) => item.type === 'Trailer')[0] ?? []
}
