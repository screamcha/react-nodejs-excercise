import React from 'react'
import ItemsService from '../services/ItemsService'

export const AppContext = React.createContext()

const AppContextProvider = ({ children }) => {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [activeModalName, setActiveModalName] = React.useState('')

  const loadItems = async () => {
    const res = await ItemsService.getItems()
    setItems(res)
  }

  React.useEffect(() => {
    loadItems()
  })

  return (
    <AppContext.Provider value={{
      items,
      cartItems,
      setCartItems,
      setActiveModalName
    }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
