'use client'

import type {
  Config,
  GetFeeHistoryErrorType,
  ResolvedRegister,
} from 'basin-hooks'
import type { Compute } from 'basin-hooks/internal'
import {
  type GetFeeHistoryData,
  type GetFeeHistoryOptions,
  type GetFeeHistoryQueryFnData,
  type GetFeeHistoryQueryKey,
  getFeeHistoryQueryOptions,
} from 'basin-hooks/query'

import type { ConfigParameter, QueryParameter } from '../types/properties.js'
import { type UseQueryReturnType, useQuery } from '../utils/query.js'
import { useChainId } from './useChainId.js'
import { useConfig } from './useConfig.js'

export type UseFeeHistoryParameters<
  config extends Config = Config,
  chainId extends
    config['chains'][number]['id'] = config['chains'][number]['id'],
  selectData = GetFeeHistoryData,
> = Compute<
  GetFeeHistoryOptions<config, chainId> &
    ConfigParameter<config> &
    QueryParameter<
      GetFeeHistoryQueryFnData,
      GetFeeHistoryErrorType,
      selectData,
      GetFeeHistoryQueryKey<config, chainId>
    >
>

export type UseFeeHistoryReturnType<selectData = GetFeeHistoryData> =
  UseQueryReturnType<selectData, GetFeeHistoryErrorType>

/** https://wagmi.sh/react/api/hooks/useFeeHistory */
export function useFeeHistory<
  config extends Config = ResolvedRegister['config'],
  chainId extends
    config['chains'][number]['id'] = config['chains'][number]['id'],
  selectData = GetFeeHistoryData,
>(
  parameters: UseFeeHistoryParameters<config, chainId, selectData> = {},
): UseFeeHistoryReturnType<selectData> {
  const { blockCount, rewardPercentiles, query = {} } = parameters

  const config = useConfig(parameters)
  const chainId = useChainId({ config })

  const options = getFeeHistoryQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId,
  })
  const enabled = Boolean(
    blockCount && rewardPercentiles && (query.enabled ?? true),
  )

  return useQuery({ ...query, ...options, enabled })
}
