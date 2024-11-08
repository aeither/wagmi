import type { SignTypedDataErrorType } from 'basin-hooks'
import type { Compute } from 'basin-hooks/internal'
import {
  type SignTypedDataData,
  type SignTypedDataMutate,
  type SignTypedDataMutateAsync,
  type SignTypedDataVariables,
  signTypedDataMutationOptions,
} from 'basin-hooks/query'

import type { ConfigParameter } from '../types/properties.js'
import {
  type UseMutationParameters,
  type UseMutationReturnType,
  useMutation,
} from '../utils/query.js'
import { useConfig } from './useConfig.js'

export type UseSignTypedDataParameters<context = unknown> = Compute<
  ConfigParameter & {
    mutation?:
      | UseMutationParameters<
          SignTypedDataData,
          SignTypedDataErrorType,
          SignTypedDataVariables,
          context
        >
      | undefined
  }
>

export type UseSignTypedDataReturnType<context = unknown> = Compute<
  UseMutationReturnType<
    SignTypedDataData,
    SignTypedDataErrorType,
    SignTypedDataVariables,
    context
  > & {
    signTypedData: SignTypedDataMutate<context>
    signTypedDataAsync: SignTypedDataMutateAsync<context>
  }
>

/** https://wagmi.sh/vue/api/composables/useSignTypedData */
export function useSignTypedData<context = unknown>(
  parameters: UseSignTypedDataParameters<context> = {},
): UseSignTypedDataReturnType<context> {
  const { mutation } = parameters

  const config = useConfig(parameters)

  const mutationOptions = signTypedDataMutationOptions(config)
  const { mutate, mutateAsync, ...result } = useMutation({
    ...mutation,
    ...mutationOptions,
  })

  type Return = UseSignTypedDataReturnType<context>
  return {
    ...result,
    signTypedData: mutate as Return['signTypedData'],
    signTypedDataAsync: mutateAsync as Return['signTypedDataAsync'],
  }
}
