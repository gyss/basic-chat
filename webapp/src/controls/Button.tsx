/** @jsx jsx */

import * as React from 'react'
import {css, jsx} from '@emotion/core'

const buttonStyles = css`
  background-color: #00d1b2;
  border-color: transparent;
  color: #fff;
  cursor: pointer;
  font-size: 1.125em;
  padding-left: 1.125em;
  padding-right: 1.125em;
`

interface IProps {
  children: React.ReactNode
}

export default function Button({children}: IProps) {
  return (
    <button css={buttonStyles}>{children}</button>
  )
}
