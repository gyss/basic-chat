/** @jsx jsx */

import * as React from 'react'
import {css, jsx} from '@emotion/core'
import styled from '@emotion/styled'

const StyledButton = styled.button`
  background-color: var(--primary-color);
  border-color: transparent;
  color: #fff;
  cursor: pointer;
  font-size: 1.125rem;
  padding-left: 1.125rem;
  padding-right: 1.125rem;
  ${(props: IProps) => props.fullWidth && 'width: 100%;'}
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: var(--secondary-color);
  }
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
