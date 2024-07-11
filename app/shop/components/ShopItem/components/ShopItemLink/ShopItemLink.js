import Link from 'next/link'

const ShopItemLink = (props) => {

  const handleClick = e => {
    e.preventDefault();
    props.openShopItemModal(props.shopItem)
  }

  return (
    <h2>
      <Link
        id={`${props.shopItem.name}-link`}
        href={`/shop/${props.shopItem.name}`}
        scroll={false}
        onClick={handleClick}
      >
        {props.shopItem.title}
      </Link>
    </h2>
  )
}

export default ShopItemLink;