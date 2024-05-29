"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import classes from './MobileNavigation.module.css'

const MobileNavigation = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname()

  useEffect(() => {
    const header = document.querySelector('header');
    const logo = document.querySelector('#logo');
    const mainNav = document.querySelector('#main-nav');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    if (isExpanded) {
      header.setAttribute("role", "presentation")
      logo.setAttribute("aria-hidden", "true")
      main.setAttribute("aria-hidden", "true")
      mainNav.setAttribute("aria-hidden", "true")
      footer.setAttribute("aria-hidden", "true")
    } else {
      header.removeAttribute("role")
      logo.removeAttribute("aria-hidden")
      main.removeAttribute("aria-hidden")
      mainNav.removeAttribute("aria-hidden")
      footer.removeAttribute("aria-hidden")
    }
  })

  const toggleIsExpanded = () => {
    if (isExpanded) {
      setIsExpanded(false);
    } else {
      setIsExpanded(true);
    }
  }

  const navigateFromMobileNav = () => {
    setIsExpanded(false);
    setTimeout(() => {
      document.querySelector('h1').focus();
    }, 100)
  }

  console.log(pathname)
  props.navLinks.forEach(navLink => {
    console.log(navLink.path)
  })

  return (
    <div
      role={isExpanded ? "dialog" : undefined}
      aria-label={isExpanded ? "Menu" : undefined}
      aria-modal={isExpanded ? "true" : undefined}
      className={[classes.wrapper, isExpanded ? classes.expanded : ""].join(" ")}
    >
      <button
        onClick={toggleIsExpanded}
        aria-expanded={isExpanded ? "true" : "false"}
        aria-label="Menu"
      >
        {isExpanded ? "X" : "🍔"}
      </button>
      {
        isExpanded &&
        (<nav>
          <ul>
            {props.navLinks.map(navLink => {
              return (<li key={navLink.path}>
                <Link
                  aria-current={pathname === navLink.path ? "page" : false}
                  href={navLink.path}
                  onClick={navigateFromMobileNav}
                >
                  {navLink.name}
                </Link>
              </li>)
            })}
            <li>
              <a href="https://www.facebook.com/museemecaniquesf/" target="_blank">
                Facebook
              </a>
            </li>
          </ul>
        </nav>)
      }
    </div >
  )
}

export default MobileNavigation;
