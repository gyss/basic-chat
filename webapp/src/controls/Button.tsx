/** @jsx jsx */

import * as React from 'react'
import {css, jsx} from '@emotion/core'
import styled from '@emotion/styled'

const StyledAnchor = styled.a`
  display: inline-block;
  text-align: center;

  min-width: 70px;
  height: 40px;
  padding: 6px 8px;

  background-color: var(--primary-color);
  border-color: transparent;
  color: #fff;
  cursor: pointer;

  ${(props: IProps) => props.fullWidth && 'width: 100%;'}
  ${(props: IProps) =>
    !props.noPadding &&
    `
    padding: 0.5rem 1.125rem;
    font-size: 1.125rem;
  `}

  &:focus {
    outline: none;
  }
  &:active {
    background-color: var(--secondary-color);
  }
`

interface IProps {
  fullWidth?: boolean
  noPadding?: boolean
  children: React.ReactNode
}

export default function Button({
  fullWidth,
  children,
  ...props
}: IProps & React.ButtonHTMLAttributes<HTMLAnchorElement>) {
  return (
    <StyledAnchor fullWidth={fullWidth} {...props}>
      {children}
    </StyledAnchor>
  )
}
