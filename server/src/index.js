const app = require('./app')
const server = require('http').createServer(app.callback())
require('./socket')(server)

const port = process.env.PORT || 4000

server.listen(port, () => console.log(port, process.env.NODE_ENV))
