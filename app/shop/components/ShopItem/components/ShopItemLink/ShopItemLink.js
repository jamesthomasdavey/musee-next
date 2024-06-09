"use client"

import Link from 'next/link'

const ShopItemLink = (props) => {
  const { name, title } = props;

  return (
    <h2>
      <Link
        id={`${name}-link`}
        href={{
          pathname: '/shop',
          query: { item: name }
        }}
        as={`/shop/${name}`}
        scroll={false}
      >
        {title}
      </Link>
    </h2>
  )
}

export default ShopItemLink;