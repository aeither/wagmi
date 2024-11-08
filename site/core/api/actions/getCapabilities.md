<script setup>
const packageName = 'basin-hooks/experimental'
const actionName = 'getCapabilities'
const typeName = 'GetCapabilities'
</script>

# getCapabilities

Action to extract capabilities (grouped by chain ID) that a connected wallet supports (e.g. paymasters, session keys, etc).

[Read more.](https://github.com/ethereum/EIPs/blob/815028dc634463e1716fc5ce44c019a6040f0bef/EIPS/eip-5792.md#wallet_getcapabilities)

::: warning
This is an experimental action that is not supported in most wallets. It is recommended to have a fallback mechanism if using this in production.
:::

## Import

```ts
import { getCapabilities } from 'basin-hooks/experimental'
```

## Usage

::: code-group
```ts [index.ts]
import { getCapabilities } from 'basin-hooks/experimental'
import { config } from './config'

const capabilities = await getCapabilities(config)
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Parameters

```ts
import { type GetCapabilitiesParameters } from 'basin-hooks/experimental'
```

### account

`Account | Address | undefined`

Fetch capabilities for the provided account.

::: code-group
```ts [index.ts]
import { getCapabilities } from 'basin-hooks/experimental'
import { config } from './config'

const capabilities = await getCapabilities(config, {
  account: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e', // [!code focus]
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

### connector

`Connector | undefined`

Connector to get capabilities from.

::: code-group
```ts [index.ts]
import { getConnections, getCapabilities } from 'basin-hooks/experimental'
import { config } from './config'

const connections = getConnections(config)
const capabilities = await getCapabilities(config, {
  connector: connections[0]?.connector, // [!code focus]
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Return Type

```ts
import { type GetCapabilitiesReturnType } from 'basin-hooks/experimental'
```

`bigint`

Most recent block number seen.

## Error

```ts
import { type GetCapabilitiesErrorType } from 'basin-hooks/experimental'
```

<!--@include: @shared/query-imports.md-->

## Viem

- [`getCapabilities`](https://viem.sh/experimental/eip5792/getCapabilities)
