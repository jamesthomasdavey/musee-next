import Link from 'next/link'

const Navigation = (props) => {
  return (
    <nav>
      <ul>
        {props.navLinks.map(navLink => {
          return (<li key={navLink.url}>
            <Link href={`/${navLink.url}`}>{navLink.name}</Link>
          </li>)
        })}
        <li>
          <a href="https://www.facebook.com/museemecaniquesf/" target="_blank">Facebook</a>
        </li>
      </ul>
    </nav >
  )
}

export default Navigation;
