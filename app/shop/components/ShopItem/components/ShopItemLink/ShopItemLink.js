"use client"

import Link from 'next/link'

const ShopItemLink = (props) => {
  const { name, title } = props

  const autofocusModalHeading = () => {
    setTimeout(() => {
      document.querySelector(`#${name}-modal-heading`).focus()
    }, 100)
  }

  return (
    <Link
      id={`${name}-link`}
      onClick={autofocusModalHeading}
      href={`/shop?item=${name}`}
      scroll={false}
    >
      <h2>{title}</h2>
    </Link>
  )
}

export default ShopItemLink;