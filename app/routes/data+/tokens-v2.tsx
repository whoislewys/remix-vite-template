import { json } from '@remix-run/node'
import type { TokenInfo } from '@uniswap/token-lists'
// This list comes from running `yarn build` script in the Uniswap Default Token List repo: git@github.com:Uniswap/default-token-list.git
import uniswapTokenList from './uniswap-default.tokenlist.server.json'
import { Address } from 'viem'
import type { Token } from '~/utils/token'
import {
  mainnet,
  polygon,
  arbitrum,
  avalanche,
  base,
  optimism,
  sepolia,
} from 'viem/chains'

export async function loader() {
  const list = uniswapTokenList.tokens

  // Remap tokenlist such that chain id is the top-level key
  const tokens = list.reduce<Record<number, Record<string, TokenInfo>>>(
    (acc, token) => {
      const curAccToken = acc?.[token.chainId]?.[token.address]
      if (
        curAccToken != null &&
        curAccToken.address === token.address &&
        curAccToken.chainId === token.chainId
      ) {
        // If duplicate entry in panoptic tokensByChain and the uniswap token list, use the panoptic one. This keeps our overriden WETH logo
        return acc
      }

      acc[token.chainId] = {
        ...acc[token.chainId],
        [token.address]: token,
      }

      return acc
    },
    tokensByChain,
  )

  const headers = {
    'Cache-Control':
      'max-age=604800, s-maxage=604800, stale-while-revalidate=86400',
  }

  return json(tokens, { headers })
}

export type TokenInfoMap = Record<number, Record<Address, Token>>

// additional tokens not provided by token lists
const tokensByChain: TokenInfoMap = {
  [mainnet.id]: {
    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2': {
      name: 'Wrapped Ether',
      address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      symbol: 'WETH',
      decimals: 18,
      chainId: 1,
      // Overwrite weth icon with native eth icon
      logoURI:
        'https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
    },
  },
  [polygon.id]: {},
  [arbitrum.id]: {
    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2': {
      name: 'Wrapped Ether',
      address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      symbol: 'WETH',
      decimals: 18,
      chainId: 1,
      logoURI:
        'https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
    },
  },
  [avalanche.id]: {
    '0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd': {
      chainId: avalanche.id,
      address: '0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd',
      decimals: 18,
      name: 'JoeToken',
      symbol: 'JOE',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/avalanchec/assets/0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd/logo.png',
    },
    // TODO: need checksummed address from getAddress() or from snowtrace + logoURI from trustwallet/assets repo
    // '0xd402298a793948698b9a63311404fbbee944eafd': {
    //   chainId: avalanche.id,
    //   address: '0xd402298a793948698b9a63311404fbbee944eafd',
    //   decimals: 18,
    //   name: 'Shrapnel',
    //   symbol: 'SHRAP',
    // },
  },
  [base.id]: {
    '0x4200000000000000000000000000000000000006': {
      name: 'Wrapped Ether',
      address: '0x4200000000000000000000000000000000000006',
      symbol: 'WETH',
      decimals: 18,
      chainId: 8453,
      logoURI:
        'https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
    },
  },
  [optimism.id]: {
    '0x4200000000000000000000000000000000000006': {
      name: 'Wrapped Ether',
      address: '0x4200000000000000000000000000000000000006',
      symbol: 'WETH',
      decimals: 18,
      chainId: 10,
      logoURI:
        'https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
    },
  },
  [sepolia.id]: {
    '0x5bB220Afc6E2e008CB2302a83536A019ED245AA2': {
      chainId: sepolia.id,
      address: '0x5bB220Afc6E2e008CB2302a83536A019ED245AA2',
      decimals: 18,
      name: 'AAVE',
      symbol: 'AAVE',
      logoURI:
        'https://assets.coingecko.com/coins/images/12645/thumb/AAVE.png?1601374110',
    },
    '0x29f2D40B0605204364af54EC677bD022dA425d03': {
      chainId: sepolia.id,
      address: '0x29f2D40B0605204364af54EC677bD022dA425d03',
      decimals: 8,
      name: 'Wrapped Bitcoin',
      symbol: 'WBTC',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
    },
    '0x8a0E31de20651fe58A369fD6f76c21A8FF7f8d42': {
      chainId: sepolia.id,
      address: '0x8a0E31de20651fe58A369fD6f76c21A8FF7f8d42',
      decimals: 18,
      name: 'Chainlink',
      symbol: 'LINK',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x514910771AF9Ca656af840dff83E8264EcF986CA/logo.png',
    },
    '0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14': {
      chainId: sepolia.id,
      address: '0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14',
      decimals: 18,
      name: 'Wrapped Ether',
      symbol: 'WETH',
      logoURI:
        'https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
    },
    '0xda9d4f9b69ac6C22e444eD9aF0CfC043b7a7f53f': {
      chainId: sepolia.id,
      address: '0xda9d4f9b69ac6C22e444eD9aF0CfC043b7a7f53f',
      decimals: 6,
      name: 'USD Coin',
      symbol: 'USDC',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
    },
    // Henry's Mock USDC that sorts after WETH
    '0xFFFeD8254566B7F800f6D8CDb843ec75AE49B07A': {
      chainId: sepolia.id,
      address: '0xFFFeD8254566B7F800f6D8CDb843ec75AE49B07A',
      decimals: 6,
      name: 'USD Coin',
      symbol: 'USDC',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
    },
    '0x0Bd5F04B456ab34a2aB3e9d556Fe5b3A41A0BC8D': {
      chainId: sepolia.id,
      address: '0x0Bd5F04B456ab34a2aB3e9d556Fe5b3A41A0BC8D',
      decimals: 6,
      name: 'Tether',
      symbol: 'USDT',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
    },
    '0xFF34B3d4Aee8ddCd6F9AFFFB6Fe49bD371b8a357': {
      chainId: sepolia.id,
      address: '0xFF34B3d4Aee8ddCd6F9AFFFB6Fe49bD371b8a357',
      decimals: 18,
      name: 'Dai Stablecoin',
      symbol: 'DAI',
      logoURI: 'https://ethereum-optimism.github.io/data/DAI/logo.svg',
    },
    '0x5822905ebbe01E76168fdAF604489c35CF10247d': {
      chainId: sepolia.id,
      address: '0x5822905ebbe01E76168fdAF604489c35CF10247d',
      decimals: 18,
      name: 'Token1',
      symbol: 'T1',
    },
    '0xB8217e5aa68238364e60a1dB1723D5eCcB09f6aa': {
      chainId: sepolia.id,
      address: '0xB8217e5aa68238364e60a1dB1723D5eCcB09f6aa',
      decimals: 18,
      name: 'Token0',
      symbol: 'T0',
    },
    '0xdc3974aa810cd4297b23aabd1c0670d9a9d3a3c8': {
      chainId: sepolia.id,
      address: '0xdc3974aa810cd4297b23aabd1c0670d9a9d3a3c8',
      decimals: 18,
      name: 'Pepe',
      symbol: 'PEPE',
      logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/24478.png',
    },
    '0x62D0A8458eD7719FDAF978fe5929C6D342B0bFcE': {
      chainId: sepolia.id,
      address: '0x62D0A8458eD7719FDAF978fe5929C6D342B0bFcE',
      decimals: 18,
      name: 'Beam',
      symbol: 'BEAM',
      logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/28298.png',
    },
    '0x195a288d9dc5012bb3e3877602c6f1be1789eeac': {
      chainId: sepolia.id,
      address: '0x195a288d9dc5012bb3e3877602c6f1be1789eeac',
      decimals: 18,
      name: 'Shiba Inu',
      symbol: 'SHIB',
      logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5994.png',
    },
    '0x1d53b93c2cc4a2c9a72ac176f4b9070ea23b0f8a': {
      chainId: sepolia.id,
      address: '0x1d53b93c2cc4a2c9a72ac176f4b9070ea23b0f8a',
      decimals: 18,
      name: 'dogwifhat',
      symbol: 'WIF',
      logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/28752.png',
    },
    '0x87f709b393c60f1ff80473afaca164ca3fa29553': {
      chainId: sepolia.id,
      address: '0x87f709b393c60f1ff80473afaca164ca3fa29553',
      decimals: 18,
      name: 'HarryPotterObamaSonic10Inu',
      symbol: 'BITCOIN',
      logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/25220.png',
    },
    '0x249613af9ddf00293dfac6837993dddad2b9088e': {
      chainId: sepolia.id,
      address: '0x249613af9ddf00293dfac6837993dddad2b9088e',
      decimals: 18,
      name: 'Mog Coin',
      symbol: 'MOG',
      logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/27659.png',
    },
  },
} as const
