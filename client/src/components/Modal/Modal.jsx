import React from 'react'
import ReactDOM from 'react-dom'
import cn from 'classnames'
import { AppContext } from '../../context/AppContext'

import './Modal.css'

const Modal = ({ children, isActive, className }) => {
  const { closeModal } = React.useContext(AppContext)

  if (!isActive) {
    return null
  }

  return ReactDOM.createPortal(
    <div className='custom-modal-container'>
      <section className={cn('custom-modal bg-white p-3 border-md border-dark rounded', className)}>
        <div className='custom-modal-header d-flex justify-content-end'>
          <button onClick={closeModal} type='button' className='close'>
            <span>&times;</span>
          </button>
        </div>
        <div className='custom-modal-content'>
          {children}
        </div>
      </section>
    </div>,
    document.getElementById('modal-root')
  )
}

export default Modal
