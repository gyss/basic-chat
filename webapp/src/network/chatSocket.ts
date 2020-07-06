import * as io from 'socket.io-client'

import {IMessage} from '../types'
import {ADD_CHAT_MESSAGE, ADD_UNREAD_MESSAGE} from '../store/actionTypes'
import {getContext} from '../store/exposedContext'
const CHAT_CHANNEL = 'CHAT'

class Socket {
  url: string
  connected: boolean
  socket: SocketIOClient.Socket

  connect(url: string) {
    this.url = url
    const socket = io(url)
    socket.on('connect', this.onConnect)
    socket.on(CHAT_CHANNEL, this.onChatEvent)
    socket.on('disconnect', this.onDisconnect)
    this.socket = socket
  }

  onConnect() {
    console.debug('Stablished chat websocket to ', this.url)
  }

  onChatEvent(message: IMessage) {
    const {
      dispatch,
      globalState: {user},
    } = getContext()

    if (user.id !== message.user.id) {
      dispatch({type: ADD_CHAT_MESSAGE, payload: message})

      if (location.pathname !== '/') {
        dispatch({type: ADD_UNREAD_MESSAGE})
      }
    }
  }

  sendMessage(payload: IMessage) {
    this.socket.emit(CHAT_CHANNEL, payload)
  }

  onDisconnect() {
    console.debug('Disconnected chat websocket')
  }
}

export default new Socket()
