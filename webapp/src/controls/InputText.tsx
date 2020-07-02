/** @jsx jsx */

import * as React from 'react'
import {css, jsx} from '@emotion/core'

const inputStyles = css`
  max-width: 100%;
  width: 100%;
  background-color: #fff;
  border-color: #dbdbdb;
  border: 1px solid transparent;
  border-radius: 4px;
  display: inline-flex;
  font-size: 1rem;
  height: 2em;
  line-height: 1.5;
  padding-left: calc(.75em - 1px);
  padding-right: calc(.75em - 1px);
`

export default function InputText(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input css={inputStyles} {...props} />
  )
}