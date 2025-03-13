import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'


export const meta: MetaFunction = (params) => {
  // const OG_IMAGE_WIDTH = 1200
  // const OG_IMAGE_HEIGHT = 630
  console.log('metadata: ', params.data.ogData)
  console.log('metadata: ', params.data.ogData)
  const {ogData:{title, ogImageUrl, url}} = params.data

  return [
    { title: title },
    { name: 'description', content: 'Welcome to Remix+Vite!' },
    {name: 'og:title', content: title},
    {name:'og:image', content: ogImageUrl},
    // {name: 'og:image:width', String(OG_IMAGE_WIDTH)},
    // {name: 'og:image:height', String(OG_IMAGE_HEIGHT)},
  ]
}

export const loader = async ({request}: LoaderFunctionArgs) => {
  const title = `Trade options on WETH/USDC and more with Panoptic.`
  const ogImageUrl = `${new URL(request.url).origin}/data/og-image-generator?title=${encodeURIComponent(title)}`

  // can test by pasting ogimageurl here: https://www.opengraph.xyz/url/<your_url>
  console.log('ogimageurl', ogImageUrl)
  console.log('request.url', request.url)

  const ogData = {
    ogImageUrl,
    url: request.url,
    title,
  }

  return {ogData}

}

const linkStyle = 'underline decoration-dotted'
export default function Index() {
  const data = useLoaderData<typeof loader>()
  console.log('ogImageUrl', data?.ogData?.ogImageUrl)
  return (
    <div>
      <div className="flex items-baseline gap-8 bg-blue-300 p-8">
        {/*<img alt="og" src={data?.ogData?.ogImageUrl ?? ''} />*/}
        <img
          src="/images/Remix-Logo-Full-Black.svg"
          alt="Remix Logo"
          className="h-12"
        />
        <h1 className="text-5xl font-bold">Welcome to Remix+Vite</h1>
      </div>
      <div className="p-8">
        <ul className="flex flex-col gap-2">
          <li>
            <Link to="/counter" className={linkStyle}>
              Counter
            </Link>
          </li>
          <li>
            <Link to="/error" className={linkStyle}>
              Test Error Handling
            </Link>
          </li>
          <li>
            <Link to="/not-found" className={linkStyle}>
              Not Found Page (Test Root Error Boundary)
            </Link>
          </li>
          <li>
            <a
              className={linkStyle}
              target="_blank"
              href="https://remix.run/tutorials/blog"
              rel="noreferrer"
            >
              15m Quickstart Blog Tutorial
            </a>
          </li>
          <li>
            <a
              className={linkStyle}
              target="_blank"
              href="https://remix.run/tutorials/jokes"
              rel="noreferrer"
            >
              Deep Dive Jokes App Tutorial
            </a>
          </li>
          <li>
            <a
              className={linkStyle}
              target="_blank"
              href="https://remix.run/docs"
              rel="noreferrer"
            >
              Remix Docs
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
