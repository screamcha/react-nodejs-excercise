import React from 'react'
import Modal from '../Modal'
import { AppContext } from '../../context/AppContext'

const ItemModal = () => {
  const { selectedItem, activeModalName, closeModal } = React.useContext(AppContext)

  return (
    <Modal className='item-modal' isActive={activeModalName === 'ItemModal'}>
      <h4>{selectedItem.name}</h4>
    </Modal>
  )
}

export default ItemModal
