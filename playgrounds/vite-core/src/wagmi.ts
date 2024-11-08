import { coinbaseWallet, metaMask, walletConnect } from '@wagmi/connectors'
import { http, createConfig, createStorage } from 'basin-hooks'
import { mainnet, optimism, sepolia } from 'basin-hooks/chains'

export const config = createConfig({
  chains: [mainnet, sepolia, optimism],
  connectors: [
    walletConnect({ projectId: import.meta.env.VITE_WC_PROJECT_ID }),
    coinbaseWallet(),
    metaMask(),
  ],
  storage: createStorage({ storage: localStorage, key: 'vite-core' }),
  transports: {
    [mainnet.id]: http(
      'https://eth-mainnet.g.alchemy.com/v2/StF61Ht3J9nXAojZX-b21LVt9l0qDL38',
    ),
    [sepolia.id]: http(
      'https://eth-sepolia.g.alchemy.com/v2/roJyEHxkj7XWg1T9wmYnxvktDodQrFAS',
    ),
    [optimism.id]: http(),
  },
})
