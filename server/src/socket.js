const IO = require('socket.io')

// io.on('message', (ctx, data) => {
//   console.log(data)
// })

module.exports = (server) => {
  const socket = IO(server)

  socket.on('connection', socket => {
    console.log('hi')
  })
}
