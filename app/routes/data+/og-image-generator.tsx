import type { LoaderFunctionArgs } from '@remix-run/node'
import satori from 'satori'
import { Resvg } from '@resvg/resvg-js'
// import { PanopticName } from '~/components/ui/icons/panoptic-name'
// import { SamplePayoff } from '~/components/ui/icons/payoff-curve'

import type { FC } from 'react'

// import type { IconProps } from './types'

export const PanopticName: FC<any> = ({
  className = '',
  height = 24,
  width = 128,
  opacity = '1',
}) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2470 405"
      height={height}
      width={width}
      className={className}>
      <path
        d="M479.226 202.5c0 111.699-90.903 202.5-202.603 202.5-111.699 0-202.5-90.801-202.5-202.5C74.123 90.8 164.924 0 276.623 0c111.7 0 202.603 90.8 202.603 202.5Zm-361.761 0c0 87.815 71.446 159.262 159.158 159.262 87.713 0 159.262-71.447 159.262-159.262S364.438 43.238 276.623 43.238 117.465 114.685 117.465 202.5Z"
        fill="#6100FF"
        opacity={opacity}
      />
      <path
        d="M557.366 202.5c0 73.711-28.311 143.305-79.786 196.014l-30.987-30.267c43.547-44.576 67.431-103.463 67.431-165.747 0-62.387-23.987-121.273-67.431-165.747L477.58 6.486c51.475 52.71 79.786 122.303 79.786 196.014ZM0 202.5C0 128.789 28.31 59.196 79.785 6.486l30.988 30.267C67.226 81.329 43.341 140.216 43.341 202.5c0 62.387 23.987 121.273 67.432 165.747l-30.988 30.267C28.311 345.804 0 276.211 0 202.5Z"
        fill="#6100FF"
        opacity={opacity}
      />
      <g transform="translate(750 -825) scale (12 12)">
        <path
          d="M0 102.186V77.7353H13.9947C14.7248 77.7353 15.384 77.9164 15.9722 78.2786C16.5806 78.6409 17.0573 79.1138 17.4021 79.6974C17.7671 80.281 17.9497 80.935 17.9497 81.6594V91.3189C17.9497 92.0433 17.7671 92.6974 17.4021 93.2809C17.0573 93.8645 16.5806 94.3374 15.9722 94.6997C15.384 95.0619 14.7248 95.243 13.9947 95.243H3.2857V102.186H0ZM4.04628 91.983H13.9034C14.1062 91.983 14.2786 91.9125 14.4206 91.7717C14.5828 91.6107 14.664 91.4296 14.664 91.2283V81.75C14.664 81.5488 14.5828 81.3777 14.4206 81.2368C14.2786 81.0758 14.1062 80.9953 13.9034 80.9953H4.04628C3.84346 80.9953 3.66092 81.0758 3.49866 81.2368C3.35669 81.3777 3.2857 81.5488 3.2857 81.75V91.2283C3.2857 91.4296 3.35669 91.6107 3.49866 91.7717C3.66092 91.9125 3.84346 91.983 4.04628 91.983Z"
          fill="#6100FF"
        />
        <path
          d="M24.414 95.243C23.6838 95.243 23.0145 95.0619 22.406 94.6997C21.8178 94.3374 21.3412 93.8645 20.9761 93.2809C20.6313 92.6974 20.4589 92.0433 20.4589 91.3189V84.8591H35.0925V81.75C35.0925 81.5488 35.0215 81.3777 34.8795 81.2368C34.7375 81.0758 34.5652 80.9953 34.3623 80.9953H20.4589V77.7353H34.4536C35.1838 77.7353 35.8429 77.9164 36.4311 78.2786C37.0396 78.6207 37.5162 79.0936 37.861 79.6974C38.2261 80.3011 38.4086 80.9551 38.4086 81.6594V95.243H24.414ZM24.5052 91.983H35.0925V87.9079H23.7446V91.2283C23.7446 91.4296 23.8156 91.6107 23.9576 91.7717C24.1199 91.9125 24.3024 91.983 24.5052 91.983Z"
          fill="#6100FF"
        />
        <path
          d="M41.5744 95.243V77.7353H55.569C56.2992 77.7353 56.9583 77.9164 57.5465 78.2786C58.155 78.6409 58.6316 79.1138 58.9764 79.6974C59.3415 80.281 59.524 80.935 59.524 81.6594V95.243H56.2383V81.75C56.2383 81.5488 56.1572 81.3777 55.9949 81.2368C55.853 81.0758 55.6806 80.9953 55.4778 80.9953H45.6206C45.4178 80.9953 45.2353 81.0758 45.073 81.2368C44.931 81.3777 44.8601 81.5488 44.8601 81.75V95.243H41.5744Z"
          fill="#6100FF"
        />
        <path
          d="M66.3738 95.243C65.6437 95.243 64.9845 95.0619 64.3963 94.6997C63.8081 94.3374 63.3315 93.8645 62.9664 93.2809C62.6014 92.6974 62.4188 92.0433 62.4188 91.3189V81.6594C62.4188 80.935 62.6014 80.281 62.9664 79.6974C63.3315 79.1138 63.8081 78.6409 64.3963 78.2786C64.9845 77.9164 65.6437 77.7353 66.3738 77.7353H76.4135C77.1436 77.7353 77.8028 77.9164 78.391 78.2786C78.9994 78.6207 79.4761 79.0936 79.8209 79.6974C80.186 80.3011 80.3685 80.9551 80.3685 81.6594V91.3189C80.3685 92.0433 80.186 92.6974 79.8209 93.2809C79.4761 93.8645 78.9994 94.3374 78.391 94.6997C77.8028 95.0619 77.1436 95.243 76.4135 95.243H66.3738ZM66.4651 91.983H76.3222C76.525 91.983 76.6974 91.9125 76.8394 91.7717C76.9814 91.6107 77.0524 91.4296 77.0524 91.2283V81.75C77.0524 81.5488 76.9814 81.3777 76.8394 81.2368C76.6974 81.0758 76.525 80.9953 76.3222 80.9953H66.4651C66.2623 80.9953 66.0797 81.0758 65.9175 81.2368C65.7755 81.3777 65.7045 81.5488 65.7045 81.75V91.2283C65.7045 91.4296 65.7755 91.6107 65.9175 91.7717C66.0797 91.9125 66.2623 91.983 66.4651 91.983Z"
          fill="#6100FF"
        />
        <path
          d="M83.8915 102.186V77.7353H97.8861C98.6163 77.7353 99.2755 77.9164 99.8637 78.2786C100.472 78.6409 100.949 79.1138 101.294 79.6974C101.659 80.281 101.841 80.935 101.841 81.6594V91.3189C101.841 92.0433 101.659 92.6974 101.294 93.2809C100.949 93.8645 100.472 94.3374 99.8637 94.6997C99.2755 95.0619 98.6163 95.243 97.8861 95.243H87.1772V102.186H83.8915ZM87.9378 91.983H97.7949C97.9977 91.983 98.1701 91.9125 98.3121 91.7717C98.4743 91.6107 98.5554 91.4296 98.5554 91.2283V81.75C98.5554 81.5488 98.4743 81.3777 98.3121 81.2368C98.1701 81.0758 97.9977 80.9953 97.7949 80.9953H87.9378C87.7349 80.9953 87.5524 81.0758 87.3901 81.2368C87.2482 81.3777 87.1772 81.5488 87.1772 81.75V91.2283C87.1772 91.4296 87.2482 91.6107 87.3901 91.7717C87.5524 91.9125 87.7349 91.983 87.9378 91.983Z"
          fill="#6100FF"
        />
        <path
          d="M108.336 95.243C107.606 95.243 106.936 95.0619 106.328 94.6997C105.74 94.3374 105.263 93.8645 104.898 93.2809C104.553 92.6974 104.381 92.0433 104.381 91.3189V72.2113H107.667V77.7353H114.907V80.9953H107.667V91.2283C107.667 91.4296 107.738 91.6107 107.88 91.7717C108.042 91.9125 108.224 91.983 108.427 91.983H114.907V95.243H108.336Z"
          fill="#6100FF"
        />
        <path
          d="M117.68 95.243V77.7353H120.966V95.243H117.68ZM117.68 75.2601V72H120.966V75.2601H117.68Z"
          fill="#6100FF"
        />
        <path
          d="M128.31 95.243C127.579 95.243 126.92 95.0619 126.332 94.6997C125.744 94.3374 125.267 93.8645 124.902 93.2809C124.537 92.6974 124.355 92.0433 124.355 91.3189V81.6594C124.355 80.935 124.537 80.281 124.902 79.6974C125.267 79.1138 125.744 78.6409 126.332 78.2786C126.92 77.9164 127.579 77.7353 128.31 77.7353H142.243V80.9953H128.401C128.198 80.9953 128.015 81.0758 127.853 81.2368C127.711 81.3777 127.64 81.5488 127.64 81.75V91.2283C127.64 91.4296 127.711 91.6107 127.853 91.7717C128.015 91.9125 128.198 91.983 128.401 91.983H142.304V95.243H128.31Z"
          fill="#6100FF"
        />
      </g>
    </svg>
  )
}

export const SamplePayoff = () => {
    // custom height & width added to enlarge
  return (
    <svg viewBox="0 0 96 32" class="" width={288} height={96}>
      <defs>
        <marker
          id="start-arrow-red"
          markerWidth="5"
          markerHeight="4"
          refX="1"
          refY="2"
          orient="auto"
          fill="#C4403C"
          class="start-marker"
        >
          <polygon points="5 0, 0 2, 5 4"></polygon>
        </marker>
        <marker
          id="start-arrow-green"
          markerWidth="5"
          markerHeight="4"
          refX="1"
          refY="2"
          orient="auto"
          fill="#169269"
          class="start-marker"
        >
          <polygon points="5 0, 0 2, 5 4"></polygon>
        </marker>
        <marker
          id="end-arrow-red"
          markerWidth="5"
          markerHeight="4"
          refX="4"
          refY="2"
          orient="auto"
          fill="#C4403C"
          class="end-marker"
        >
          <polygon points="0 0, 5 2, 0 4"></polygon>
        </marker>
        <marker
          id="end-arrow-green"
          markerWidth="5"
          markerHeight="4"
          refX="4"
          refY="2"
          orient="auto"
          fill="#169269"
          class="end-marker"
        >
          <polygon points="0 0, 5 2, 0 4"></polygon>
        </marker>
      </defs>
      <path
        d="M 4 16 L 4 16 L 21.6 16 L 39.2 16 L 56.800000000000004 16 L 58.56000000000001 16 L 74.4 20.799999999999997 L 92 26.133333333333333 L 92 16 Z"
        fill="#F5555080"
      ></path>
      <path
        d="M 4 16 L 4 4.800000000000001 L 21.6 4.800000000000001 L 39.2 4.800000000000001 L 56.800000000000004 15.466666666666667 L 58.56000000000001 16 L 74.4 16 L 92 16 L 92 16 Z"
        fill="#45E1AF80"
      ></path>
      <line
        x1="4"
        y1="16"
        x2="92"
        y2="16"
        stroke="#695959"
        stroke-width="1.25"
        stroke-opacity=".4"
        stroke-linecap="round"
        stroke-dasharray="0.13 5.14"
      ></line>
      <polyline
        points="4,4.800000000000001 21.6,4.800000000000001 39.2,4.800000000000001 56.800000000000004,15.466666666666667 74.4,20.799999999999997 92,26.133333333333333"
        fill="none"
        stroke="hsl(160, 0%, 33%)"
        stroke-width="2"
      ></polyline>
      <g>
        <polyline
          points="4,4.800000000000001 21.6,4.800000000000001 39.2,4.800000000000001 56.800000000000004,15.466666666666667 58.56000000000001,16"
          fill="none"
          stroke="#169269"
          stroke-width="2"
          marker-start="url(#start-arrow-green)"
          marker-end=""
          style="--marker-color: #169269;"
        ></polyline>
      </g>
      <g>
        <polyline
          points="58.56000000000001,16 74.4,20.799999999999997 92,26.133333333333333"
          fill="none"
          stroke="#C4403C"
          stroke-width="2"
          marker-start=""
          marker-end="url(#end-arrow-red)"
          style="--marker-color: #C4403C;"
        ></polyline>
      </g>
      <circle
        cx="39.2"
        cy="4.800000000000001"
        r="3.357"
        fill="#169269"
        stroke="#0C0C0C"
        stroke-width="1.25"
      ></circle>
      <circle
        cx="56.800000000000004"
        cy="15.466666666666667"
        r="3.357"
        fill="#169269"
        stroke="#0C0C0C"
        stroke-width="1.25"
      ></circle>
    </svg>
  )
}

export const LayeredWaves2 = () => {
  // made with Layered Waves generator on https://app.haikei.app/
  // the Layered Steps is cool too, looks like liquidity chunks
  return (
    <svg
      id="visual"
      viewBox="0 0 1200 600"
      width="1200"
      height="600"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs id="defs2" />
      <path
        d="M -1,600 72.1048,566.7 C 145.09207,533.3 291.30167,466.7 406.83546,400 522.36925,333.3 607.46229,266.7 559.03918,200 510.61606,133.3 328.91185,66.7 237.94221,33.3 L 147.09011,0 H 1199 v 33.3 c 0,33.4 0,100 0,166.7 0,66.7 0,133.3 0,200 0,66.7 0,133.3 0,166.7 V 600 Z"
        fill="#402060"
        opacity={0.33}
        id="path1"
        style="stroke-width:1.08412"
      />
      <path
        d="m 773.53477,600 31.49853,-33.3 c 31.6161,-33.4 94.6131,-100 142.8012,-166.7 48.188,-66.7 81.5671,-133.3 77.806,-200 -3.761,-66.7 -44.427,-133.3 -64.8775,-166.7 L 940.43,0 H 1199 v 33.3 c 0,33.4 0,100 0,166.7 0,66.7 0,133.3 0,200 0,66.7 0,133.3 0,166.7 V 600 Z"
        fill="#211f26"
        id="path2"
        opacity={.420}
        style="stroke-width:1.08412"
      />
    </svg>
  )
}

export const TokenIconV2 = ({
  token,
  className,
  width = 20,
  height = 20,
  withTooltip = false,
}: {
  token?: { logoURI: string; symbol: string }
  className?: string
  width?: number
  height?: number
  withTooltip?: boolean
}) => {
  if (token == undefined) {
    return null
  }

  const ipfsPrefix = 'ipfs://'
  const tokenLogoUri = token.logoURI.includes(ipfsPrefix)
    ? `https://ipfs.io/ipfs/${token.logoURI.slice(ipfsPrefix.length)}`
    : token.logoURI
  return (
    <span
      style={{
        width,
        height,
      }}
    >
      <img
        src={tokenLogoUri}
        alt={token.symbol}
        width={width}
        height={height}
        // The border-radius from rounded-full kinda cuts of the edges of square svgs, but whatever
        className={'h-full w-full rounded-full object-contain'}
      />
    </span>
  )
}

// These two blogs are helpful w/ implementation:
// https://www.simeongriggs.dev/serve-dynamic-og-images-from-remix-with-satori
// https://www.jacobparis.com/content/remix-og

// This tool helpful for designing the OG image
// https://og-playground.vercel.app/

// This tool is helpful for testing share img on different platforms
// https://www.opengraph.xyz/url/https%3A%2F%2F2ab2-2601-8c0-a01-99b0-888d-f4cd-aaf3-6e11.ngrok-free.app

const OG_IMAGE_WIDTH = 800
const OG_IMAGE_HEIGHT = 500

// Makes typescript compiler stop complaining about `tw` property used by satori for tailwind styling
declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    tw?: string
  }
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url)
  const title = url.searchParams.get('title')

  // bg is tailwind indigo-950
  const jsx = (
    <div tw="flex flex-col justify-center bg-[#0A1128] text-white w-full h-full p-12">
      <div tw="flex absolute inset-0 -left-60">
        <LayeredWaves2 />
      </div>

      <div tw="flex w-full absolute inset-0 top-10 left-10">
        <PanopticName width={140} />
      </div>

      <div tw="flex flex-col h-full w-full justify-center pt-9">
        <div tw="flex flex-row w-full justify-end items-end">
          <section
            id="position_pnl"
            tw="flex flex-col w-1/2 justify-center align-start"
          >
            <div tw="flex flex-col items-start justify-end">
              <div tw="flex flex-row justify-center items-center">
                <TokenIconV2
                  token={{
                    logoURI:
                      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
                    symbol: 'WETH',
                  }}
                />
                <span tw="-ml-2">
                  <TokenIconV2
                    token={{
                      logoURI:
                        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
                      symbol: 'USDC',
                    }}
                  />
                </span>
                <p tw="text-2xl ml-2">WETH / USDC 5bps</p>
              </div>

              <div id="pnl" tw="flex flex-col">
                <div tw="flex flex-row w-full justify-between">
                  <p tw="flex items-end justify-start text-green-500 text-7xl font-bold -ml-1">
                    +30.51%
                  </p>
                </div>
                <p tw="text-green-500 text-2xl -mt-1">(+151.4 USDC)</p>
              </div>
            </div>
          </section>

          <section id="payoff_curve" tw="flex flex-col w-1/2">
            <div tw="flex justify-center items-end mb-4 w-full">
              <SamplePayoff />
            </div>
          </section>
        </div>

        <div tw="flex flex-row w-full">
          <section
            id="entry_and_exit"
            tw="flex flex-row w-1/2 justify-start items-end"
          >
            <div tw="flex flex-col mr-12">
              <p tw="text-gray-400/75 text-lg">ENTRY PRICE</p>
              <p tw="text-white font-medium text-2xl -mt-4">2289 USDC</p>
            </div>
            <div tw="flex flex-col">
              <p tw="text-gray-400/75 text-lg">MARK PRICE</p>
              <p tw="text-white font-medium text-2xl -mt-4">1890 USDC</p>
            </div>
          </section>

          <section id="legs" tw="flex flex-col w-1/2 pt-4 ml-18 justify-end">
            <p tw="text-lg -mt-2">-2x 1M-Call 2289 | Short</p>
            <p tw="text-lg -mt-2">+1x 1M-Call 3361 | Long</p>
          </section>
        </div>
      </div>
    </div>
  )

  const fontSansRes = await fetch(
    `${new URL(request.url).origin}/fonts/Inter-Medium.woff`,
  )
  const fontSansData = await fontSansRes.arrayBuffer()

  console.log('fontSansData', fontSansData)

  // From satori docs example
  const svg = await satori(jsx, {
    width: OG_IMAGE_WIDTH,
    height: OG_IMAGE_HEIGHT,
    embedFont: true,
    fonts: [
      {
        name: 'Inter',
        data: fontSansData,
        style: 'normal',
      },
    ],
  })

  const resvg = new Resvg(svg)
  const pngData = resvg.render()
  const data = pngData.asPng()
  return new Response(data, {
    headers: {
      'Content-Type': 'image/png',
    },
  })
}
