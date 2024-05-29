"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import Navigation from './components/Navigation/Navigation'
import MobileNavigation from './components/MobileNavigation/MobileNavigation'

const navLinks = [
	{ name: "Visit", path: "/visit" },
	{ name: "Our Story", path: "/story" },
	{ name: "Gallery", path: "/gallery" },
	{ name: "Shop", path: "/shop" }
]

const Header = () => {
	const pathname = usePathname()

	const navigateFromHeader = () => {
		setTimeout(() => {
			document.querySelector('h1').focus();
		}, 100)
	}

	return (
		<header>
			<Link
				id="logo"
				aria-current={pathname === "/" ? "page" : false}
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
			<MobileNavigation navLinks={navLinks} />
		</header>
	)
}

export default Header;
