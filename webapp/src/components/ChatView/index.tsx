/** @jsx jsx */

import * as React from 'react'
import {css, jsx} from '@emotion/core'

import Message, {IMessage} from './Message'
import Button from '../../controls/Button'
import InputText from '../../controls/InputText'

const container = css`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 53px);
`

const messagesBox = css`
  padding: 1rem;
  overflow-y: auto;
  flex-grow: 1;
`

const footer = css`
  padding: 1rem;
  display: flex;
  justify-content: space-between;

  input {
    width: 100%;
    margin-right: 1rem;
  }
`

const messages:Array<IMessage> = []

for (let i=0; i<20;i++) {
  messages.push({
    id: i,
    user: i % 3 === 0 ? 'yo' : 'xxxxx',
    timestamp: 1593673011,
    text: i % 5 === 0 ? 'Super long message Super long messageSuper long messageSuper long messageSuper long messageSuper long messageSuper long message ' : 'message'
  },)
}

export default function ChatView() {
  return (
    <div css={container}>
      <div css={messagesBox}>
        {messages.map((message) => (
          <Message
            key={message.id} 
            message={message} 
            isOwnedByUser={message.user === 'yo'}
          />
        ))}
      </div>
      <div css={footer}>
        <InputText name="message" placeholder="Enter message" />
        <Button>Send</Button>
      </div>
    </div>
  )
}
