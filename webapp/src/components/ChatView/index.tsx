/** @jsx jsx */

import * as React from 'react'
import {css, jsx} from '@emotion/core'

import {IMessage} from '../../types'
import {SET_CHAT_MESSAGE, SEND_CHAT_MESSAGE} from '../../store/actionTypes'
import Context from '../../store/Context'
import chatSocket from '../../network/chatSocket'
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
    globalState: {user, settings, chatView},
    dispatch,
  } = React.useContext(Context)

  // Action creators
  function handleChangeMessage(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.currentTarget.value
    console.log(event.currentTarget.value)
    console.log(event.target)
    dispatch({type: SET_CHAT_MESSAGE, payload: value})
  }

  function handleKeyDownMessage(event: React.KeyboardEvent<HTMLInputElement>) {
    console.log(event.keyCode)
    if (event.keyCode) {
      // enter
      // handleSendMessage()
    }
  }

  function handleSendMessage() {
    console.log('SEND BUTON!')
    if (!chatView.message) {
      return
    }

    const timestamp = new Date().getTime()
    const message: IMessage = {
      id: user.id + timestamp,
      user: {...user},
      timestamp,
      text: chatView.message,
    }
    dispatch({type: SEND_CHAT_MESSAGE, payload: {message}})
    chatSocket.sendMessage(message)
  }

  return (
    <div css={container}>
      <div css={messagesBox}>
        {!chatView.messages.length ? (
          <div>
            <i>No messages yet</i>
          </div>
        ) : (
          chatView.messages.map((message) => (
            <Message
              key={message.id}
              message={message}
              isOwnedByUser={message.user.id === user.id}
              hourFormat={settings.hourFormat}
            />
          ))
        )}
      </div>
      <div css={footer}>
        <InputText
          name="message"
          placeholder="Enter message"
          value={chatView.message}
          onKeyDown={handleKeyDownMessage}
          onChange={handleChangeMessage}
        />
        <Button onClick={handleSendMessage}>Send</Button>
      </div>
    </div>
  )
}
