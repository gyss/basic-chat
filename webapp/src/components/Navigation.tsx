/** @jsx jsx */

import * as React from 'react'
import {css, Global, jsx} from '@emotion/core'
import {NavLink} from 'react-router-dom'

const navigationStyles = css`
  background-color: var(--primary-color);
  width: 100%;

  ul {
    margin: 0;
    padding: 0;
  }

  ul > li {
    display: inline-block;
    padding: 1rem 1.125rem;

    a,
    a:visited,
    a:hover {
      text-decoration: none;
      color: var(--tertiary-color);
    }
    a:hover {
      color: white;
    }
  }
`

const activeStyle = {
  color: 'white',
}

export default function Navigation() {
  return (
    <nav css={navigationStyles}>
      <ul>
        <li>
          <NavLink exact to="/" activeStyle={activeStyle}>
            Chat
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/settings" activeStyle={activeStyle}>
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
