/** @jsx jsx */

import * as React from 'react'
import {css, jsx} from '@emotion/core'

const selectStyles = css`
  font-size: 1em;
`

interface Option {
  value: string
  label: string
}
interface IProps {
  options: Array<Option>
}

export default function Select({options, ...props}: IProps & React.InputHTMLAttributes<HTMLSelectElement>) {
  return (
    <select css={selectStyles} {...props}>
      {options.map(
        (option:Option) => <option value={option.value}>{option.label}</option>
      )}
    </select>
  )
}