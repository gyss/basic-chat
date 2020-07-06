/** @jsx jsx */

import * as React from 'react'
import * as moment from 'moment'
import {jsx} from '@emotion/core'
import styled from '@emotion/styled'

import {IMessage} from '../../types'

export interface IProps {
  message: IMessage
  hourFormat?: '24' | '12'
  isOwnedByUser?: boolean
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props: Partial<IProps>) => (props.isOwnedByUser ? 'flex-end' : 'flex-start')};

  > div {
    padding: 10px;
  }
`

const Bubble = styled.div`
  position: relative;
  background-color: white;
  color: black;
  border-radius: 20px;
  min-width: 40px;
  width: fit-content;

  &::after {
    content: '';
    position: absolute;
    top: -4px;
    ${(props: Partial<IProps>) => (props.isOwnedByUser ? 'right' : 'left')}: 15px;
    width: 10px;
    height: 10px;
    background-color: white;
    transform: rotate(45deg);
  }
`

export default function Message({message, isOwnedByUser, hourFormat}: IProps) {
  return (
    <Container isOwnedByUser={isOwnedByUser}>
      <div>
        {!isOwnedByUser && message.user.username + ', '}
        {moment(message.timestamp).format(hourFormat === '24' ? 'HH:mm' : 'hh:mm a')}
      </div>
      <Bubble isOwnedByUser={isOwnedByUser}>{message.text}</Bubble>
    </Container>
  )
}
