<script setup>
const packageName = 'basin-hooks'
const actionName = 'waitForTransactionReceipt'
const typeName = 'WaitForTransactionReceipt'
</script>

# waitForTransactionReceipt

Action that waits for the transaction to be included on a block, and then returns the transaction receipt. If the transaction reverts, then the action will throw an error. Replacement detection (e.g. sped up transactions) is also supported.

## Import

```ts
import { waitForTransactionReceipt } from 'basin-hooks'
```

## Usage

::: code-group
```ts [index.ts]
import { waitForTransactionReceipt } from 'basin-hooks'
import { config } from './config'

const transactionReceipt = waitForTransactionReceipt(config, {
  hash: '0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d',
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Parameters

```ts
import { type WaitForTransactionReceiptParameters } from 'basin-hooks'
```

### chainId

`config['chains'][number]['id'] | undefined`

ID of chain to use when fetching data.

::: code-group
```ts [index.ts]
import { waitForTransactionReceipt } from 'basin-hooks'
import { mainnet } from 'basin-hooks/chains'
import { config } from './config'

const transactionReceipt = await waitForTransactionReceipt(config, {
  chainId: mainnet.id, // [!code focus]
  hash: '0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d',
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

### confirmations

`number | undefined`

The number of confirmations (blocks that have passed) to wait before resolving.

::: code-group
```ts [index.ts]
import { waitForTransactionReceipt } from 'basin-hooks'
import { config } from './config'

const transactionReceipt = await waitForTransactionReceipt(config, {
  confirmations: 2, // [!code focus]
  hash: '0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d',
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

### onReplaced

`
(({ reason: 'replaced' | 'repriced' | 'cancelled'; replacedTransaction: Transaction; transaction: Transaction; transactionReceipt: TransactionReceipt }) => void) | undefined
`

Optional callback to emit if the transaction has been replaced.

::: code-group
```ts [index.ts]
import { waitForTransactionReceipt } from 'basin-hooks'
import { config } from './config'

const transactionReceipt = await waitForTransactionReceipt(config, {
  hash: '0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d',
  onReplaced: replacement => console.log(replacement), // [!code focus]
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

### hash

`` `0x${string}` ``

The transaction hash to wait for.

::: code-group
```ts [index.ts]
import { waitForTransactionReceipt } from 'basin-hooks'
import { config } from './config'

const transactionReceipt = await waitForTransactionReceipt(config, {
  hash: '0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d', // [!code focus]
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

### pollingInterval

`number | undefined`

- Polling frequency (in milliseconds).
- Defaults to the [Config's `pollingInterval` config](/core/api/createConfig#pollinginterval).

::: code-group
```ts [index.ts]
import { waitForTransactionReceipt } from 'basin-hooks'
import { config } from './config'

const transactionReceipt = await waitForTransactionReceipt(config, {
  hash: '0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d',
  pollingInterval: 1_000, // [!code focus]
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Return Type

```ts
import { type WaitForTransactionReceiptReturnType } from 'basin-hooks'
```

[`TransactionReceipt`](https://viem.sh/docs/glossary/types.html#transactionreceipt)

The transaction receipt.

## Error

```ts
import { type WaitForTransactionReceiptErrorType } from 'basin-hooks'
```

<!--@include: @shared/query-imports.md-->

## Viem

- [`waitForTransactionReceipt`](https://viem.sh/docs/actions/public/waitForTransactionReceipt.html)
