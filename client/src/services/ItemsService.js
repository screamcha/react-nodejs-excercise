import api from './api'

class ItemsService {
  static async getItems () {
    return api.get('/items')
  }

  static async getItem (id) {
    return api.get(`/items/${id}`)
  }

  static async updateItem (id, data) {
    return api.patch(`/items/${id}`, data)
  }
}

export default ItemsService
