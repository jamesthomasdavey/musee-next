import parse from 'html-react-parser';

import ShopItemLink from './components/ShopItemLink/ShopItemLink';

const ShopItem = (props) => {
  const { name, images, title, price, shortDescription, isSoldOut, form } = props.shopItem

  let shopButton;
  if (isSoldOut) {
    shopButton = (
      <button disabled>
        Sold Out!
      </button>
    );
  } else {
    shopButton = parse(form);
  }

  return (
    <article>
      <img src={images[0].src} alt="" />
      <ShopItemLink
        name={name}
        title={title}
        shopItem={props.shopItem}
        openShopItemModal={props.openShopItemModal}
      />
      <span>{price}</span>
      {parse(shortDescription)}
      {shopButton}
      <hr></hr>
    </article>
  )
}

export default ShopItem;