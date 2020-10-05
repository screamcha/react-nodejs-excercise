import React from 'react'
import ItemsService from '../services/ItemsService'

export const AppContext = React.createContext()

const AppContextProvider = ({ children }) => {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState({})
  const [activeModalName, setActiveModalName] = React.useState('')
  const [selectedItem, setSelectedItem] = React.useState({})

  const cartItemsNumber = React.useMemo(() =>
    Object.values(cartItems)
      .reduce((res, next) => res + next, 0)
  , [cartItems])

  const loadItems = async () => {
    const res = await ItemsService.getItems()
    setItems(res)
  }

  React.useEffect(() => {
    loadItems()
  }, [])

  const selectItem = async (item) => {
    openModal('ItemModal')

    const fullItem = await ItemsService.getItem(item.id)
    setSelectedItem(fullItem)
  }

  const countItemInCart = (item) => {
    return cartItems[item.id] || 0
  }

  const addItemToCart = async (item) => {
    const currentItemCount = countItemInCart(item)

    const updatedItem = await ItemsService.updateItem(
      item.id, {
        quantity: item.quantity - 1
      })

    setSelectedItem(updatedItem)
    setCartItems({
      ...cartItems,
      [item.id]: currentItemCount + 1
    })
    loadItems()
  }

  const removeItemFromCart = async (item) => {
    const currentItemCount = countItemInCart(item)

    if (currentItemCount === 0) {
      return
    }

    const updatedItem = await ItemsService.updateItem(
      item.id, {
        quantity: item.quantity + 1
      })

    setSelectedItem(updatedItem)
    setCartItems({
      ...cartItems,
      [item.id]: currentItemCount - 1
    })
    loadItems()
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
      removeItemFromCart,
      countItemInCart,
      cartItemsNumber
    }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
