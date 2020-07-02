/** @jsx jsx */

import * as React from 'react'
import {css, jsx} from '@emotion/core'
import styled from '@emotion/styled'

const StyledButton = styled.button`
  background-color: #00d1b2;
  border-color: transparent;
  color: #fff;
  cursor: pointer;
  font-size: 1.125em;
  padding-left: 1.125em;
  padding-right: 1.125em;
  ${(props: IProps) => props.fullWidth && 'width: 100%;'}
`

interface IProps {
  fullWidth?: boolean
  children: React.ReactNode
}

export default function Button({
  fullWidth,
  children,
  ...props
}: IProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <StyledButton fullWidth={fullWidth} {...props}>
      {children}
    </StyledButton>
  )
}
