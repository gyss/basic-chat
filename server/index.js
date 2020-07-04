/** @format */

const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

// https://socket.io/get-started/chat

const CHAT_CHANNEL = 'CHAT'

io.on('connection', (socket) => {
  console.log('a user connected')

  socket.broadcast.emit('hi')

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })

  socket.on('chat message', (msg) => {
    console.log('message: ', msg)
    io.emit('chat message', msg)
  })
  socket.on(CHAT_CHANNEL, (payload) => {
    console.log('message recieved: ', payload)
    io.emit(CHAT_CHANNEL, payload)
  })
})

http.listen(3000, () => {
  console.log('listening on *:3000')
})
