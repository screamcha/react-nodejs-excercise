class User {
  constructor (data) {
    this.id = data.id
    this.username = data.username
    this.passwordHash = data.password_hash
  }
}

module.exports = User
