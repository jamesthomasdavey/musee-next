import React from 'react'

import ShopItem from './components/ShopItem/ShopItem'

import shopItems from './../data/shopItems'

const Shop = () => {
	return (
		<main>
			<h1 tabIndex="-1">Shop</h1>
			{
				shopItems.map(shopItem => {
					return (
						<ShopItem
							key={shopItem.name}
							name={shopItem.name}
							imageSource={shopItem.images[0].src}
							title={shopItem.title}
							price={shopItem.price}
							shortDescription={shopItem.shortDescription}
							isSoldOut={shopItem.isSoldOut}
							form={shopItem.form}
						/>
					)
				})
			}
		</main>
	)
}

export default Shop