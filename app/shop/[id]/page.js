'use client'
import React from 'react';

import shopItems from "../../data/shopItems";

const ShopItemPage = ({ params }) => {
  const { id } = params;
  let shopItem;

  shopItems.forEach(item => {
    if (item.name === id) {
      shopItem = item;
    }
  })
  return (
    <div>
      <h1>{shopItem.title}</h1>
    </div>
  )
}

export default ShopItemPage;
