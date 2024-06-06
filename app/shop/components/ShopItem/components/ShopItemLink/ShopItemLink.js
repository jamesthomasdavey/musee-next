"use client"

import Link from 'next/link'

const ShopItemLink = (props) => {
  const { name, title } = props

  return (
    <Link
      id={`${name}-link`}
      href={`/shop?item=${name}`}
      scroll={false}
    >
      <h2>{title}</h2>
    </Link>
  )
}

export default ShopItemLink;