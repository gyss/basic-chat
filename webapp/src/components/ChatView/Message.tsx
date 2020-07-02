/** @jsx jsx */

import * as React from 'react'
import {css, jsx} from '@emotion/core'

export interface IMessage {
  id: number
  user: string
  timestamp: number
  text: string
}

interface IProps {
  message: IMessage
}

const container = css`
  /*margin-top: 10px;*/
`

const details = css`
  padding: 10px;
`

const bubble = css`
  position: relative;
  display: inline-block;
  background-color: white;
  border-radius: 20px;
  padding: 10px;

  &::after {
    content: '';
    position: absolute;
    top: -4px;
    left: 15px;
    width: 10px;
    height: 10px;
    background-color: white;
    transform: rotate(45deg);
  }

  
`

export default function Message({message}: IProps) {
  return (
    <div css={container}>
      <div css={details}>{message.user},{message.timestamp}</div>
      <div css={bubble}>{message.text}</div>
    </div>
  )
}
