"use client"
import { useRouter } from 'next/navigation'
import { Suspense } from 'react'

import ShopItem from './components/ShopItem/ShopItem'
import ShopItemModal from './components/ShopItemModal/ShopItemModal'

import shopItems from './../data/shopItems'

const ShopPage = ({ params }) => {
	const router = useRouter();

	const closeShopItemModal = name => {
		router.push('/shop', { scroll: false })
		setTimeout(() => {
			document.querySelector(`#${name}-link`).focus()
		}, 100)
	}

	return (
		<>
			<Suspense>
				<ShopItemModal
					close={closeShopItemModal}
				/>
			</Suspense>
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

export default ShopPage