import api from './api'

class ItemsService {
  static async getItems () {
    return api.get('/items')
  }
}

export default ItemsService
