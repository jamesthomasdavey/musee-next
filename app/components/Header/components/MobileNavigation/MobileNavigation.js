"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'

import classes from './MobileNavigation.module.css'

const MobileNavigation = props => {
  const [isExpanded, setIsExpanded] = useState(false);

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

  return (
    <div
      role={isExpanded ? "dialog" : undefined}
      aria-label={isExpanded ? "Menu" : undefined}
      aria-modal={isExpanded ? "true" : undefined}
      className={[isExpanded ? classes.expanded : ""].join(" ")}
    >
      <button onClick={toggleIsExpanded} aria-expanded={isExpanded ? "true" : "false"} aria-label="Menu">
        {isExpanded ? "X" : "🍔"}
      </button>
      {
        isExpanded &&
        (<nav>
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
        </nav>)
      }
    </div>
  )
}

export default MobileNavigation;
