import * as io from 'socket.io-client'

import {IMessage} from '../models/types'
import {SEND_CHAT_MESSAGE} from '../store/actionTypes'
import Context from '../store/Context'

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

  onChatEvent(data: IMessage) {
    console.log('Chat websocket event')
    console.log(data)
    console.log('....', Context)

    /*???
    if (user !== local) {
      dispatch({type: SEND_CHAT_MESSAGE, payload: data})
    }
    */
  }

  sendMessage(payload: IMessage) {
    this.socket.emit(CHAT_CHANNEL, payload)
  }

  onDisconnect() {
    console.debug('Disconnected chat websocket')
  }
}

export default new Socket()
