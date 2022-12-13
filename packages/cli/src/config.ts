import type { Address as AddressType } from 'abitype'
import { Abi as AbiSchema } from 'abitype/zod'
import { getAddress } from 'ethers/lib/utils.js'
import { z } from 'zod'

const Address = z
  .string()
  .regex(/^0x[a-fA-F0-9]{40}$/, { message: 'Invalid address' })
  .transform((val) => getAddress(val)) as z.ZodType<AddressType>
const MultiChainAddress = z.record(z.string(), Address)
const Contract = z.object({
  /** Contract ABI */
  abi: AbiSchema,
  /**
   * Contract address or addresses.
   *
   * Accepts an object `{ [chainId]: address }` to support multiple chains.
   *
   * @example
   * '0x314159265dd8dbb310642f98f50c066173c1259b'
   *
   * @example
   * {
   *   1: '0x314159265dd8dbb310642f98f50c066173c1259b',
   *   5: '0x112234455c3a32fd11230c42e7bccd4a84e02010',
   * }
   */
  address: z.union([Address, MultiChainAddress]).optional(),
  /**
   * Name of contract
   *
   * Used for names of generated code
   */
  name: z.string(),
})
export type Contract = z.infer<typeof Contract>

const AbiFn = z
  .function()
  .args(z.any())
  .returns(z.union([AbiSchema, AbiSchema.promise()]))
const ContractSource = Contract.merge(
  z.object({ abi: z.union([AbiFn, AbiSchema]) }),
)
export type ContractSource = z.infer<typeof ContractSource>

const Watch = z.object({
  /** Optional command to run along with watch process */
  command: z.string().optional(),
  /** Paths to watch for changes. */
  paths: z.string().array(),
  /** Callback that fires when file is added */
  onAdd: z
    .function()
    .args(z.string())
    .returns(
      z.union([
        z.union([Contract, z.undefined()]),
        z.union([Contract, z.undefined()]).promise(),
      ]),
    )
    .optional(),
  /** Callback that fires when file changes */
  onChange: z
    .function()
    .args(z.string())
    .returns(
      z.union([
        z.union([Contract, z.undefined()]),
        z.union([Contract, z.undefined()]).promise(),
      ]),
    ),
  /** Callback that fires when file is removed */
  onRemove: z
    .function()
    .args(z.string())
    .returns(z.union([z.string(), z.string().promise()]))
    .optional(),
})
export type Watch = z.infer<typeof Watch>
const ContractsSource = z.object({
  name: z.string(),
  contracts: z.function().args().returns(Contract.array().promise()),
  watch: Watch.optional(),
})
export type ContractsSource = z.infer<typeof ContractsSource>

export const Config = z.object({
  contracts: z.union([ContractSource, ContractsSource]).array(),
  plugins: z.string().array().optional(),
})
// TODO: Figure out way for JSDoc to show up without needing to recreate type
export type Config = z.infer<typeof Config>

export function defineConfig(config: Config) {
  return config
}