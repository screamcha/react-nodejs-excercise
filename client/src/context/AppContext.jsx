import React from 'react'
import ItemsService from '../services/ItemsService'

export const AppContext = React.createContext()

const AppContextProvider = ({ children }) => {
  const [items, setItems] = React.useState([])
  const [cartItemsCount, setCartItemsCount] = React.useState(0)

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
      cartItemsCount,
      setCartItemsCount
    }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
