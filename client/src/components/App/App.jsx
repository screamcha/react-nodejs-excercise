import React from 'react'
import AppContextProvider from '../../context/AppContext'
import Header from '../Header'
import ItemList from '../ItemList'

const App = () => {
  return (
    <AppContextProvider>
      <Header />
      <ItemList className='mt-5' />
    </AppContextProvider>
  )
}

export default App
