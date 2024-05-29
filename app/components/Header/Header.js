"use client"
import Link from 'next/link'

import Navigation from './components/Navigation/Navigation'
import MobileNavigation from './components/MobileNavigation/MobileNavigation'

const navLinks = [
	{ name: "Visit", path: "/visit" },
	{ name: "Our Story", path: "/story" },
	{ name: "Gallery", path: "/gallery" },
	{ name: "Shop", path: "/shop" }
]

const Header = () => {
	const navigateFromHeader = () => {
		setTimeout(() => {
			document.querySelector('h1').focus();
		}, 100)
	}

	return (
		<header>
			<MobileNavigation navLinks={navLinks} />
			<Link
				id="logo"
				href="/"
				onClick={navigateFromHeader}
			>
				<div>
					Musée Mécanique
				</div>
				<div>
					Family owned and operated since 1933
				</div>
			</Link>
			<Navigation navLinks={navLinks} />
		</header>
	)
}

export default Header;
