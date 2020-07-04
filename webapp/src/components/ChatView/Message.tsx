/** @jsx jsx */

import * as React from 'react'
import * as moment from 'moment'
import {jsx} from '@emotion/core'
import styled from '@emotion/styled'

import {IMessage} from '../../models/types'

interface IProps {
  message?: IMessage
  isOwnedByUser?: boolean
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props: IProps) => (props.isOwnedByUser ? 'flex-end' : 'flex-start')};

  > div {
    padding: 10px;
  }
`

const Bubble = styled.div`
  position: relative;
  background-color: white;
  border-radius: 20px;
  width: fit-content;

  &::after {
    content: '';
    position: absolute;
    top: -4px;
    ${(props: IProps) => (props.isOwnedByUser ? 'right' : 'left')}: 10px;
    width: 10px;
    height: 10px;
    background-color: white;
    transform: rotate(45deg);
  }
`

export default function Message({message, isOwnedByUser}: IProps) {
  return (
    <Container isOwnedByUser={isOwnedByUser}>
      <div>
        {!isOwnedByUser && message.user.username + ', '}
        {moment(message.timestamp).format('hh:mm a')}
      </div>
      <Bubble isOwnedByUser={isOwnedByUser}>{message.text}</Bubble>
    </Container>
  )
}
