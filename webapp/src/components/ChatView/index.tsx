/** @jsx jsx */

import * as React from 'react'
import {css, jsx} from '@emotion/core'

import Context from '../../store/Context'
import Message from './Message'
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

export default function ChatView() {
  const {
    globalState: {messages},
    dispatch,
  } = React.useContext(Context)

  return (
    <div css={container}>
      <div css={messagesBox}>
        {!messages.length ? (
          <div>
            <i>No messages yet</i>
          </div>
        ) : (
          messages.map((message) => (
            <Message key={message.id} message={message} isOwnedByUser={message.user === 'yo'} />
          ))
        )}
      </div>
      <div css={footer}>
        <InputText name="message" placeholder="Enter message" />
        <Button>Send</Button>
      </div>
    </div>
  )
}
