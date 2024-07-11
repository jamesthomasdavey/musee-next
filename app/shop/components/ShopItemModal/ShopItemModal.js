"use client"
import { useEffect } from 'react'
import parse from 'html-react-parser';

import classes from './ShopItemModal.module.css'

const ShopItemModal = (props) => {

  useEffect(() => {
    document.querySelector("#product-modal-heading").focus();
  })

  let shopButton;
  if (props.shopItem.isSoldOut) {
    shopButton = (
      <button disabled>
        Sold Out!
      </button>
    );
  } else {
    shopButton = parse(props.shopItem.form);
  }

  return (
    <div
      className={classes.wrapper}
      role="dialog"
      aria-labelledby="product-modal-heading"
    >
      <h1 tabIndex="-1" id="product-modal-heading">
        {props.shopItem.title}
      </h1>
      <button
        onClick={() => props.closeShopItemModal(props.shopItem.name)}
        aria-label={`Close ${props.shopItem.title} dialog`}
      >
        X
      </button>
      <div>
        <img src={props.shopItem.images[0].src} alt="" />
      </div>
      <p>{props.shopItem.price}</p>
      {shopButton}
      {parse(props.shopItem.longDescription)}
    </div>
  )

}

export default ShopItemModal