import React from 'react'
import { useHistory } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import UserService from '../../services/UserService'

import './Login.css'

const Login = () => {
  const history = useHistory()
  const { setUser } = React.useContext(AppContext)

  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await UserService.login({ username, password })
      setUser(true)
      history.push('/')
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <section className='login'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className='form-group'>
          <label htmlFor='username'>Username</label>
          <input type='text' className='form-control' id='username' value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input type='password' className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
    </section>
  )
}

export default Login
