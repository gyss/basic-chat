/** @jsx jsx */

import * as React from 'react'
import {css, jsx} from '@emotion/core'

import {IMessage} from '../../types'
import {SET_CHAT_MESSAGE, ADD_CHAT_MESSAGE} from '../../store/actionTypes'
import Context from '../../store/Context'
import chatSocket from '../../network/chatSocket'
import Button from '../../controls/Button'
import MessagesList from './MessagesList'
import InputText from '../../controls/InputText'
import sendIcon from '../../../assets/icons/send.svg'
import {maxWidth700} from '../../styles'

const container = css`
  overflow-y: auto;
  flex: 1;
`

const footer = css`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  ${maxWidth700}

  input {
    width: 100%;
    margin-right: 1rem;
  }
`

const iconStyles = css`
  width: 25px;
  height: 25px;
`

export default function ChatView() {
  const {
    globalState: {user, settings, chatView},
    dispatch,
  } = React.useContext(Context)

  // Action creators
  function handleChangeMessage(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.currentTarget.value
    dispatch({type: SET_CHAT_MESSAGE, payload: value})
  }

  function handleKeyDownMessage(event: React.KeyboardEvent<HTMLInputElement>) {
    if (settings.sendType && event.ctrlKey && event.keyCode === 13) {
      handleSendMessage()
    }
  }

  function handleSendMessage() {
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
    dispatch({type: ADD_CHAT_MESSAGE, payload: message})
    chatSocket.sendMessage(message)
  }

  return (
    <React.Fragment>
      <div css={container}>
        <MessagesList messages={chatView.messages} userId={user.id} hourFormat={settings.hourFormat} />
      </div>
      <div css={footer}>
        <InputText
          name="message"
          placeholder="Enter message"
          value={chatView.message}
          onKeyDown={handleKeyDownMessage}
          onChange={handleChangeMessage}
        />
        <Button onClick={handleSendMessage} noPadding data-testid="send-button">
          <img src={sendIcon} css={iconStyles} />
        </Button>
      </div>
    </React.Fragment>
  )
}
