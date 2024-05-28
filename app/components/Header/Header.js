import Link from 'next/link'

const Header = () => {
	return (
		<header>
			<Link href="/">
				<div>
					Musée Mécanique
				</div>
				<div>
					Family owned and operated since 1933
				</div>
			</Link>
		</header>
	)
}

export default Header;
