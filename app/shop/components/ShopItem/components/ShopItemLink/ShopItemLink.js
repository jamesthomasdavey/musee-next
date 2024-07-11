import Link from 'next/link'

const ShopItemLink = (props) => {
  const { name, title } = props;

  return (
    <h2>
      <Link
        id={`${name}-link`}
        href={`/shop/${name}`}
        scroll={false}
      >
        {title}
      </Link>
    </h2>
  )
}

export default ShopItemLink;