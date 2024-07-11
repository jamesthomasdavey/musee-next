"use client"
import { useState } from 'react'

// components
import ShopItem from './components/ShopItem/ShopItem'
import ShopItemModal from './components/ShopItemModal/ShopItemModal'

// data
import shopItems from './../data/shopItems'

const ShopPage = () => {

	const [modalActive, setModalActive] = useState(false);
	const [activeShopItem, setActiveShopItem] = useState(null)

	const openShopItemModal = shopItem => {
		setModalActive(true);
		setActiveShopItem(shopItem);
	}

	const closeShopItemModal = name => {
		setModalActive(false);
		setTimeout(() => {
			document.querySelector(`#${name}-link`).focus()
		}, 100)
	}

	return (
		<>
			{modalActive && <ShopItemModal shopItem={activeShopItem} closeShopItemModal={closeShopItemModal} />}
			<main>
				<h1 tabIndex="-1">Shop</h1>
				{
					shopItems.map((shopItem, i) => {
						return (
							<ShopItem
								key={i}
								shopItem={shopItem}
								openShopItemModal={openShopItemModal}
							/>
						)
					})
				}
			</main>
		</>
	)
}

export default ShopPage