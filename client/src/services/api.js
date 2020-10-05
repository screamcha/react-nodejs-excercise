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

  async patch (url, body) {
    const res = await fetch(`${this.apiUrl}${url}`, {
      method: 'PATCH',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return res.json()
  }
}

const api = new Api()

export default api
