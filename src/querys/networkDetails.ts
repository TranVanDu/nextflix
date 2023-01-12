import {
  useQuery,
  type UseQueryOptions,
  type QueryFunctionContext
} from 'react-query'
import { axiosClientTmdb } from '../services'
import type { INetworkDetails } from '../interfaces'

export const useQueryNetwork = (
  networkId: string,
  opitions?: UseQueryOptions<INetworkDetails>
) => {
  return useQuery<INetworkDetails>(
    ['network details', networkId],
    getNetwork,
    opitions
  )
}

export const getNetwork = async (
  ctx: QueryFunctionContext
): Promise<INetworkDetails> => {
  const [, networkId] = ctx.queryKey
  const { data } = await axiosClientTmdb.get(`network/${networkId}`)
  return data
}
