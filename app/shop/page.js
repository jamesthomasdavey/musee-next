"use client"
import { useRouter, useSearchParams } from 'next/navigation'

import ShopItem from './components/ShopItem/ShopItem'
import ShopItemModal from './components/ShopItemModal/ShopItemModal'

import shopItems from './../data/shopItems'

const Shop = () => {
	const router = useRouter();
	const searchParams = useSearchParams();

	const closeShopItemModal = name => {
		router.push('/shop', { scroll: false })
		setTimeout(() => {
			document.querySelector(`#${name}-link`).focus()
		}, 100)
	}

	let activeShopItem;

	if (searchParams.get('item')) {
		shopItems.forEach(shopItem => {
			if (shopItem.name === searchParams.get('item')) {
				activeShopItem = shopItem;
			}
		})
	}

	return (
		<>
			{
				activeShopItem &&
				<ShopItemModal
					close={closeShopItemModal}
					shopItem={activeShopItem}
				/>
			}
			<main>
				<h1 tabIndex="-1">Shop</h1>
				{
					shopItems.map((shopItem, i) => {
						return (
							<ShopItem
								key={i}
								shopItem={shopItem}
							/>
						)
					})
				}
			</main>
		</>
	)
}

export default Shop