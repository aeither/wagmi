'use client'

import type { Config, ResolvedRegister } from 'basin-hooks'
import {
  type GetCallsStatusData,
  type GetCallsStatusErrorType,
  type GetCallsStatusOptions,
  type GetCallsStatusQueryFnData,
  type GetCallsStatusQueryKey,
  getCallsStatusQueryOptions,
} from 'basin-hooks/experimental'
import type { Compute } from 'basin-hooks/internal'

import { useConfig } from '../../hooks/useConfig.js'
import type { ConfigParameter, QueryParameter } from '../../types/properties.js'
import { type UseQueryReturnType, useQuery } from '../../utils/query.js'

export type UseCallsStatusParameters<
  config extends Config = Config,
  selectData = GetCallsStatusData,
> = Compute<
  GetCallsStatusOptions &
    ConfigParameter<config> &
    QueryParameter<
      GetCallsStatusQueryFnData,
      GetCallsStatusErrorType,
      selectData,
      GetCallsStatusQueryKey
    >
>

export type UseCallsStatusReturnType<selectData = GetCallsStatusData> =
  UseQueryReturnType<selectData, GetCallsStatusErrorType>

/** https://wagmi.sh/react/api/hooks/useCallsStatus */
export function useCallsStatus<
  config extends Config = ResolvedRegister['config'],
  selectData = GetCallsStatusData,
>(
  parameters: UseCallsStatusParameters<config, selectData>,
): UseCallsStatusReturnType<selectData> {
  const { query = {} } = parameters

  const config = useConfig(parameters)

  const options = getCallsStatusQueryOptions(config, parameters)

  return useQuery({ ...query, ...options })
}
