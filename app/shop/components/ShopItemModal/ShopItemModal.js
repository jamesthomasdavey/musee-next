"use client"

import { useSearchParams } from 'next/navigation'

import classes from './ShopItemModal.module.css'
import shopItems from './../../../data/shopItems'

const ShopItemModal = props => {
  const searchParams = useSearchParams();
  if (searchParams.get('item')) {
    let activeShopItem;
    shopItems.forEach(shopItem => {
      if (shopItem.name === searchParams.get('item')) {
        activeShopItem = shopItem;
      }
    })
    if (activeShopItem) {
      return (
        <div
          className={classes.wrapper}
          role="dialog"
          aria-labelledby={`${activeShopItem.name}-modal-heading`}
        >
          <h1 tabIndex="-1" autoFocus id={`${activeShopItem.name}-modal-heading`}>
            {activeShopItem.title}
          </h1>
          <button
            onClick={() => props.close(activeShopItem.name)}
          >
            X
          </button>
        </div>
      )
    } else {
      return
    }
  } else {
    return
  }
}

export default ShopItemModal