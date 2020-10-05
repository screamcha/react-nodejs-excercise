import React from 'react'
import ItemsService from '../services/ItemsService'
import SocketService from '../services/SocketService'

export const AppContext = React.createContext()

const socket = new SocketService()

const AppContextProvider = ({ children }) => {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState({})
  const [activeModal, setActiveModal] = React.useState('')
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

  React.useEffect(() => {
    const handler = (data) => {
      loadItems()
      openModal('ItemChangeModal', data)
    }
    socket.onItemChange(handler)
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
    socket.notifyChange(item, -1)
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
    socket.notifyChange(item, 1)
  }

  const openModal = (name, data = {}) => setActiveModal({ name, ...data })
  const closeModal = () => setActiveModal({})

  return (
    <AppContext.Provider value={{
      items,
      cartItems,
      selectedItem,
      activeModal,
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
