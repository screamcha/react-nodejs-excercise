const IO = require('socket.io')

module.exports = (server) => {
  const io = IO(server, {
    path: '/socket'
  })

  io.on('connection', (socket) => {
    console.log(`${socket.id} is connected`)

    socket.on('item_change', (data) => {
      socket.broadcast.emit('item_changed', data)
    })
  })
}
