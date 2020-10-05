import React from 'react'
import Modal from '../Modal'
import { AppContext } from '../../context/AppContext'

import './ItemModal.css'

const ItemModal = () => {
  const {
    selectedItem,
    activeModal,
    closeModal,
    addItemToCart,
    removeItemFromCart,
    countItemInCart
  } = React.useContext(AppContext)

  const itemInCart = countItemInCart(selectedItem)

  return (
    <Modal className='item-modal' isActive={activeModal.name === 'ItemModal'}>
      <span className='item-modal__id'>{selectedItem.id}</span>
      <h4 className='item-modal__name'>{selectedItem.name}</h4>
      <div className='item-modal__info d-flex justify-content-between flex-column flex-sm-row align-items-center'>
        <span className='item-modal__price'>${selectedItem.price}</span>
        <span className='item-modal__quantity border border-dark'>{selectedItem.quantity}</span>
      </div>
      <div className='item-modal__description'>{selectedItem.description}</div>
      <div className='item-modal__buttons d-flex flex-sm-column flex-row justify-content-around'>
        <button
          className='btn btn-sm btn-success'
          disabled={selectedItem.quantity === 0}
          onClick={() => addItemToCart(selectedItem)}>
          Add to cart
        </button>
        <button
          className='btn btn-sm btn-warning'
          disabled={itemInCart === 0}
          onClick={() => removeItemFromCart(selectedItem)}>
          Remove from cart
        </button>
        <span className='item-modal__in-cart'>This items in cart: {itemInCart}</span>
        <button className='btn btn-sm btn-info' onClick={closeModal}>Close</button>
      </div>
    </Modal>
  )
}

export default ItemModal
