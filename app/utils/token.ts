import type { TokenInfo } from '@uniswap/token-lists'
import { type Address } from 'viem'

export interface Token extends TokenInfo {
  address: Address
}
