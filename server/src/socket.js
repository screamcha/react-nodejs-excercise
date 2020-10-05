const IO = require('socket.io')

// io.on('message', (ctx, data) => {
//   console.log(data)
// })

module.exports = (server) => {
  const socket = IO(server, {
    path: '/socket'
  })

  socket.on('connection', socket => {
    console.log('hi')
  })
}
