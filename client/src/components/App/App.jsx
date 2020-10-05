import React from 'react'
import AppContextProvider from '../../context/AppContext'
import Header from '../Header'
import ItemList from '../ItemList'
import ItemModal from '../ItemModal'
import ItemChangeModal from '../ItemChangeModal'

const App = () => {
  return (
    <AppContextProvider>
      <Header />
      <ItemList className='mt-5' />

      <ItemModal />
      <ItemChangeModal />
    </AppContextProvider>
  )
}

export default App
