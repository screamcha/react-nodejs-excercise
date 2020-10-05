import api from './api'

class ItemsService {
  static async getItems () {
    return api.get('/items')
  }

  static async getItem (id) {
    return api.get(`/items/${id}`)
  }
}

export default ItemsService
