class Api {
  constructor () {
    this.apiUrl = `${process.env.API_URL}/api/v1`
  }

  async get (url) {
    const res = await fetch(`${this.apiUrl}${url}`, {
      method: 'GET'
    })

    return res.json()
  }
}

const api = new Api()

export default api
