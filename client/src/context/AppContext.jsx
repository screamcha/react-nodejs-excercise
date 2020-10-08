import React from 'react'
import { useHistory } from 'react-router-dom'
import ItemsService from '../services/ItemsService'
import SocketService from '../services/SocketService'

export const AppContext = React.createContext()

const socket = new SocketService()

const AppContextProvider = ({ children }) => {
  const history = useHistory()

  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState({})
  const [activeModal, setActiveModal] = React.useState('')
  const [selectedItem, setSelectedItem] = React.useState({})
  const [user, setUser] = React.useState(false)

  const cartItemsNumber = React.useMemo(() =>
    Object.values(cartItems)
      .reduce((res, next) => res + next, 0)
  , [cartItems])

  const loadItems = async () => {
    try {
      const res = await ItemsService.getItems()
      setItems(res || [])
    } catch (error) {
      if (error.message === '401') {
        history.replace('/login')
      } else {
        alert(error.message)
      }
    }
  }

  React.useEffect(() => {
    loadItems()
  }, [user])

  React.useEffect(() => {
    const handler = (data) => {
      loadItems()
      openModal('ItemChangeModal', data)
    }
    socket.onItemChange(handler)
  }, [])

  const selectItem = async (item) => {
    try {
      openModal('ItemModal')

      const fullItem = await ItemsService.getItem(item.id)
      setSelectedItem(fullItem)
    } catch (error) {
      alert(error.message)
    }
  }

  const countItemInCart = (item) => {
    return cartItems[item.id] || 0
  }

  const addItemToCart = async (item) => {
    try {
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
    } catch (error) {
      alert(error.message)
    }
  }

  const removeItemFromCart = async (item) => {
    try {
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
    } catch (error) {
      alert(error.message)
    }
  }

  const openModal = (name, data = {}) => setActiveModal({ name, ...data })
  const closeModal = () => setActiveModal({})

  return (
    <AppContext.Provider value={{
      items,
      cartItems,
      selectedItem,
      activeModal,
      cartItemsNumber,
      openModal,
      closeModal,
      selectItem,
      addItemToCart,
      removeItemFromCart,
      countItemInCart,
      setUser
    }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
