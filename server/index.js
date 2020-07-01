const http = require('http').createServer(app)
const io = require('socket.io')(http)

// https://socket.io/get-started/chat

io.on('connection', (socket) => {
  console.log('a user connected')

  socket.broadcast.emit('hi')

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })

  socket.on('chat message', (msg) => {
    console.log('message: ' + msg)
    io.emit('chat message', msg)
  })
})

http.listen(3000, () => {
  console.log('listening on *:3000')
})