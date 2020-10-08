class Api {
  constructor () {
    this.apiUrl = `${process.env.API_URL}/api/v1`
    this.defaults = {
      credentials: 'include'
    }
  }

  async send (...args) {
    try {
      const res = await fetch(...args)

      if (!res.ok) {
        throw new Error(res.status)
      }

      const contentType = res.headers.get('Content-Type')
      if (contentType.includes('application/json')) {
        return res.json()
      }
      return res.text()
    } catch (error) {
      console.error(error.message)
      throw error
    }
  }

  get (url) {
    return this.send(`${this.apiUrl}${url}`, {
      ...this.defaults,
      method: 'GET'
    })
  }

  patch (url, body) {
    return this.send(`${this.apiUrl}${url}`, {
      ...this.defaults,
      method: 'PATCH',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  post (url, body) {
    return this.send(`${this.apiUrl}${url}`, {
      ...this.defaults,
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}

const api = new Api()

export default api
