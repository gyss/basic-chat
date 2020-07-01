/** @jsx jsx */

import * as React from 'react'
import {css, jsx} from '@emotion/core'

const container = css`
  display: flex;
  flex-direction: column;
  flex: 1;
`

interface IProps {
  children: React.ReactNode
}

export default function Layout({children}: IProps) {
  return (
    <div css={container}>
      <nav>Navigation</nav>
      <div>{children}</div>
      <footer>footer</footer>
    </div>
  )
}
