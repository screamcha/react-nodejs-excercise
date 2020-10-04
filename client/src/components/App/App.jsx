import React from 'react'
import AppContextProvider from '../../context/AppContext'
import ItemList from '../ItemList'

const App = () => {
  return (
    <AppContextProvider>
      <header>this is header</header>
      <ItemList className='mt-5' />
    </AppContextProvider>
  )
}

export default App
