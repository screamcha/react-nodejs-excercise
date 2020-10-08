import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/App'
import history from './history'

import 'regenerator-runtime/runtime'

import './index.css'

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
)
