import Link from 'next/link'

import Navigation from './components/Navigation/Navigation'
import MobileNavigation from './components/MobileNavigation/MobileNavigation'

const navLinks = [
	{ name: "Visit", url: "visit" },
	{ name: "Our Story", url: "story" },
	{ name: "Gallery", url: "gallery" },
	{ name: "Shop", url: "shop" }
]

const Header = () => {
	return (
		<header>
			<MobileNavigation navLinks={navLinks} />
			<Link href="/">
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
