import React from 'react'
import Modal from '../Modal'
import { AppContext } from '../../context/AppContext'

const ItemChangeModal = () => {
  const { activeModal } = React.useContext(AppContext)
  const { name, itemName, change } = activeModal

  const message = `${itemName} quantity ${change > 0 ? 'increased' : 'decreased'} by 1`

  return (
    <Modal className='item-change-modal' isActive={name === 'ItemChangeModal'}>
      <h3 className='item-modal__name'>Someone changed the data:</h3>
      <p>{message}</p>
    </Modal>
  )
}

export default ItemChangeModal
