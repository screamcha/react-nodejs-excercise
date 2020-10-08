import api from './api'

class UserService {
  static async login (data) {
    return api.post('/auth/login', data)
  }
}

export default UserService
