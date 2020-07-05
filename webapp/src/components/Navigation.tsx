/** @jsx jsx */

import * as React from 'react'
import {css, Global, jsx} from '@emotion/core'
import {NavLink} from 'react-router-dom'

const navigationStyles = css`
  background-color: var(--primary-color);
  width: 100%;
  display: flex;
  padding-left: 1rem;
  > a {
    text-decoration: none;
    color: var(--tertiary-color);
    padding: 1rem 1.125rem;
    :hover {
      color: white;
    }
  }
  a + a {
    margin-left: 1rem;
  }
`

const activeStyle = {
  color: 'white',
}

export default function Navigation() {
  return (
    <nav css={navigationStyles}>
      <NavLink exact to="/" activeStyle={activeStyle}>
        Chat
      </NavLink>
      <NavLink exact to="/settings" activeStyle={activeStyle}>
        Settings
      </NavLink>
    </nav>
  )
}
