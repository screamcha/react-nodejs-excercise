import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AppContextProvider from '../../context/AppContext'
import Header from '../Header'
import ItemList from '../ItemList'
import Login from '../Login'
import ItemModal from '../ItemModal'
import ItemChangeModal from '../ItemChangeModal'

const App = () => {
  return (
    <AppContextProvider>

      <Switch>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/'>
          <Header />
          <ItemList className='mt-5' />
        </Route>
      </Switch>

      <ItemModal />
      <ItemChangeModal />
    </AppContextProvider>
  )
}

export default App
