"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import classes from './Navigation.module.css'

const Navigation = (props) => {
  const pathname = usePathname()

  const navigateFromNav = () => {
    setTimeout(() => {
      // document.querySelector('h1').focus();
    }, 100)
  }

  return (
    <nav id="main-nav" className={classes.wrapper}>
      <ul>
        {props.navLinks.map(navLink => {
          return (
            <li key={navLink.path}>
              <Link
                aria-current={pathname === navLink.path ? "page" : false}
                href={navLink.path}
                onClick={navigateFromNav}
              >
                {navLink.name}
              </Link>
            </li>
          )
        })}
        <li>
          <a href="https://www.facebook.com/museemecaniquesf/" target="_blank">Facebook</a>
        </li>
      </ul>
    </nav >
  )
}

export default Navigation;
