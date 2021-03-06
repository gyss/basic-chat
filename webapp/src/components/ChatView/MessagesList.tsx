/** @jsx jsx */

import * as React from 'react'
import {css, jsx} from '@emotion/core'

import {IMessage} from '../../types'
import {maxWidth700} from '../../styles'
import Message from './Message'

const messagesBox = css`
  padding: 1rem;
  ${maxWidth700}
`

export interface IProps {
  messages: Array<IMessage>
  userId: string
  hourFormat?: '24' | '12'
}

export default function MessagesList({messages, userId, hourFormat}: IProps) {
  return (
    <div css={messagesBox}>
      {!messages.length ? (
        <div>
          <i>No messages yet</i>
        </div>
      ) : (
        messages.map((message) => (
          <Message
            key={message.id}
            message={message}
            isOwnedByUser={message.user.id === userId}
            hourFormat={hourFormat}
          />
        ))
      )}
    </div>
  )
}
