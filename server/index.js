/** @format */

const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

const IP = '0.0.0.0'
const PORT = 3000
const CHAT_CHANNEL = 'CHAT'

io.on('connection', (socket) => {
  console.log('new user connected')
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
  socket.on(CHAT_CHANNEL, (payload) => {
    console.log('message recieved: ', payload)
    io.emit(CHAT_CHANNEL, payload)
  })
})

http.listen(PORT, IP, () => {
  console.log('listening on ' + IP + ':' + PORT)
})
