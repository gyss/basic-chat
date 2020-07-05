/** @jsx jsx */

import * as React from 'react'
import {css, jsx} from '@emotion/core'

const inputStyles = css`
  max-width: 100%;
  width: 100%;
  background-color: #fff;
  border-color: #dbdbdb;
  border: 1px solid transparent;
  display: inline-flex;
  font-size: 1.125rem;
  height: 41px;
  padding-left: calc(0.75em - 1px);
  padding-right: calc(0.75em - 1px);
  &:focus {
    outline: none;
  }
`

export default function InputText(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input type="text" css={inputStyles} {...props} />
}
