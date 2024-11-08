<script setup>
const packageName = 'basin-hooks'
const actionName = 'getTransaction'
const typeName = 'GetTransaction'
</script>

# getTransaction

Action for fetching transactions given hashes or block identifiers.

## Import

```ts
import { getTransaction } from 'basin-hooks'
```

## Usage

::: code-group
```ts [index.ts]
import { getTransaction } from 'basin-hooks'
import { config } from './config'

const transaction = getTransaction(config, {
  hash: '0x0fa64daeae54e207aa98613e308c2ba8abfe274f75507e741508cc4db82c8cb5',
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Parameters

```ts
import { type GetTransactionParameters } from 'basin-hooks'
```

---

### blockHash

`bigint | undefined`

Block hash to get transaction at (with [`index`](#index)).

::: code-group
```ts [index.ts]
import { getTransaction } from 'basin-hooks'
import { config } from './config'

const transaction = getTransaction(config, {
  blockHash: '0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d', // [!code focus]
  index: 0,
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

### blockNumber

`bigint | undefined`

Block number to get transaction at (with [`index`](#index)).

::: code-group
```ts [index.ts]
import { getTransaction } from 'basin-hooks'
import { config } from './config'

const transaction = getTransaction(config, {
  blockNumber: 17829139n, // [!code focus]
  index: 0,
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

### blockTag

`'latest' | 'earliest' | 'pending' | 'safe' | 'finalized' | undefined`

Block tag to get transaction at (with [`index`](#index)).

::: code-group
```ts [index.ts]
import { getTransaction } from 'basin-hooks'
import { config } from './config'

const transaction = getTransaction(config, {
  blockTag: 'safe', // [!code focus]
  index: 0,
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

---

### chainId

`config['chains'][number]['id'] | undefined`

ID of chain to use when fetching data.

::: code-group
```ts [index.ts]
import { getTransaction } from 'basin-hooks'
import { mainnet } from 'basin-hooks/chains'
import { config } from './config'

const transaction = await getTransaction(config, {
  chainId: mainnet.id, // [!code focus]
  hash: '0x0fa64daeae54e207aa98613e308c2ba8abfe274f75507e741508cc4db82c8cb5',
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

### hash

`` `0x${string}` | undefined ``

Hash to get transaction.

::: code-group
```ts [index.ts]
import { getTransaction } from 'basin-hooks'
import { config } from './config'

const transaction = getTransaction(config, {
  hash: '0x0fa64daeae54e207aa98613e308c2ba8abfe274f75507e741508cc4db82c8cb5', // [!code focus]
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

### index

`number | undefined`

An index to be used with a block identifier ([hash](#blockhash), [number](#blocknumber), or [tag](#blocktag)).

::: code-group
```ts [index.ts]
import { getTransaction } from 'basin-hooks'
import { config } from './config'

const transaction = getTransaction(config, {
  blockTag: 'safe',
  index: 0  // [!code focus]
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Return Type

```ts
import { type GetTransactionReturnType } from 'basin-hooks'
```

[`Transaction`](https://viem.sh/docs/glossary/types.html#transaction)

## Error

```ts
import { type GetTransactionErrorType } from 'basin-hooks'
```

<!--@include: @shared/query-imports.md-->

## Viem

- [`getTransaction`](https://viem.sh/docs/actions/public/getTransaction.html)
