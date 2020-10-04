import React from 'react'
import AppContextProvider from '../../context/AppContext'
import Header from '../Header'
import ItemList from '../ItemList'
import ItemModal from '../ItemModal'

const App = () => {
  return (
    <AppContextProvider>
      <Header />
      <ItemList className='mt-5' />

      <ItemModal />
    </AppContextProvider>
  )
}

export default App
