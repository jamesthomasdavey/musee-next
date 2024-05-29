'use client'
import React from 'react';

import shopItems from "../../data/shopItems";

const ShopItem = ({ params }) => {
  const { id } = params;
  let shopItem;

  shopItems.forEach(item => {
    if (item.name === id) {
      shopItem = item;
    }
  })
  return (
    <main>
      <h1>{shopItem.title}</h1>
    </main>
  )
}

export default ShopItem;
