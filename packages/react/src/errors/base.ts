import { BaseError as CoreError } from 'basin-hooks'

import { getVersion } from '../utils/getVersion.js'

export type BaseErrorType = BaseError & { name: 'WagmiError' }
export class BaseError extends CoreError {
  override name = 'WagmiError'
  override get docsBaseUrl() {
    return 'https://wagmi.sh/react'
  }
  override get version() {
    return getVersion()
  }
}
