import type { LoaderFunctionArgs } from '@remix-run/node'
import satori from 'satori'
import { Resvg } from '@resvg/resvg-js'
import { PanopticName } from '~/components/ui/icons/panoptic-name'
import { LayeredWaves } from '~/components/ui/icons/layered-waves-haikei'
import { LayeredWaves2 } from '~/components/ui/icons/layered-waves-haikei-big'
import { SamplePayoff } from '~/components/ui/icons/payoff-curve'
import { TokenIconV2 } from '~/components/token-icon'

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
