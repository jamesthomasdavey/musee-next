"use client"
import classes from './ShopItemModal.module.css'

const ShopItemModal = props => {
  const { name, images, title, price, longDescription, isSoldOut, form } = props.shopItem
  return (
    <div
      className={classes.wrapper}
      role="dialog"
      aria-labelledby={`${name}-modal`}
    >
      <h1 tabindex="-1" id={`${name}-modal`}>{title}</h1>
      <button
        onClick={() => props.close(name)}
        aria-label="Close dialog"
      >
        X
      </button>
    </div>
  )
}

export default ShopItemModal