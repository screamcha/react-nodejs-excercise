import io from 'socket.io-client'

class SocketService {
  constructor () {
    this.socket = io(`${process.env.API_URL}`, {
      path: '/socket'
    })
  }

  notifyChange (item, change) {
    this.socket.emit('item_change', {
      itemId: item.id,
      itemName: item.name,
      change
    })
  }

  onItemChange (handler) {
    this.socket.on('item_changed', handler)
  }
}

export default SocketService
