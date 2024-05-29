"use client"
import { useState } from 'react'
import Link from 'next/link'

import classes from './MobileNavigation.module.css'

const MobileNavigation = props => {
  const [isExpanded, setIsExpanded] = useState("false");
  const toggleIsExpanded = () => {
    if (isExpanded === "false") {
      setIsExpanded("true");
    } else {
      setIsExpanded("false");
    }
  }
  return (
    <div
      role={isExpanded === "false" ? undefined : "dialog"}
      aria-label={isExpanded === "false" ? undefined : "Menu"}
      aria-modal={isExpanded === "false" ? undefined : "true"}
      className={[isExpanded === "true" && classes.expanded].join(" ")}
    >
      <button onClick={toggleIsExpanded} aria-expanded={isExpanded} aria-label="Menu">
        {isExpanded === "false" ? "🍔" : "X"}
      </button>
      {
        isExpanded === "true" &&
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
