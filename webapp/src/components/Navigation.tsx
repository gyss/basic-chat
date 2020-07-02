/** @jsx jsx */

import * as React from 'react'
import {css, Global, jsx} from '@emotion/core'
import { Link } from "react-router-dom";

const navigationStyles = css`
  background-color: rgb(0, 150, 136);
  width: 100%;

  ul {
    margin: 0;
    padding: 0;
  }

  ul > li {
    display: inline-block;
    padding: 1rem 1.125rem;
    
    a, a:visited, a:hover {
      color: #fff;
      text-decoration: none;
    }
    a: hover {
      color: #ccc;
    }
  }
`

const selectedStyles = css`
  text-decoration: underline;
`

export default function Navigation() {
  return (
    <nav css={navigationStyles}>
      <ul>
        <li>
          <Link to="/">Chat</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </nav>
  )
}
