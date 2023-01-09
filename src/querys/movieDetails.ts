import {
  useQuery,
  type UseQueryOptions,
  type QueryFunctionContext
} from 'react-query'
import { axiosClientTmdb } from '../services'
import type { IMovieDetails } from '../interfaces'

export const useQueryMovieDetails = (
  movieId: string,
  language: string,
  opitions?: UseQueryOptions<IMovieDetails>
) => {
  return useQuery<IMovieDetails>(
    ['movie details', movieId, language],
    getMovieDetails,
    opitions
  )
}

export const getMovieDetails = async (
  ctx: QueryFunctionContext
): Promise<IMovieDetails> => {
  const [, movieId, language] = ctx.queryKey
  const { data } = await axiosClientTmdb.get(`tv/${movieId}`, {
    params: { language }
  })
  return data
}
