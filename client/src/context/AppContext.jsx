import React from 'react'
import ItemsService from '../services/ItemsService'

export const AppContext = React.createContext()

const AppContextProvider = ({ children }) => {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState({})
  const [activeModalName, setActiveModalName] = React.useState('')
  const [selectedItem, setSelectedItem] = React.useState({})

  const loadItems = async () => {
    const res = await ItemsService.getItems()
    setItems(res)
  }

  React.useEffect(() => {
    loadItems()
  })

  const selectItem = (item) => {
    setSelectedItem(item)
    openModal('ItemModal')
  }

  const addItemToCart = (item) => {
    const currentItemCount = cartItems[item.id] || 0

    setCartItems({
      ...cartItems,
      [item.id]: currentItemCount + 1
    })
  }

  const removeItemFromCart = (item) => {
    const currentItemCount = cartItems[item.id] || 0

    if (currentItemCount === 0) {
      return
    }

    setCartItems({
      ...cartItems,
      [item.id]: currentItemCount - 1
    })
  }

  const openModal = (name) => setActiveModalName(name)
  const closeModal = () => setActiveModalName('')

  return (
    <AppContext.Provider value={{
      items,
      cartItems,
      selectedItem,
      activeModalName,
      openModal,
      closeModal,
      selectItem,
      addItemToCart,
      removeItemFromCart
    }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
