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
