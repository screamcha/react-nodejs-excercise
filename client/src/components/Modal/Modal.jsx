import React from 'react'
import ReactDOM from 'react-dom'
import { AppContext } from '../../context/AppContext'

const Modal = ({ children, isActive }) => {
  const { setActiveModalName } = React.useContext(AppContext)

  if (!isActive) {
    return null
  }

  ReactDOM.createPortal(
    <div className='modal-container'>
      <section className='modal'>
        <div className='modal-header d-flex justify-content-end'>
          <button onClick={() => setActiveModalName('')} type='button' className='close'>
            <span>&times;</span>
          </button>
        </div>
        <div className='modal-content'>
          {children}
        </div>
      </section>
    </div>,
    document.getElementById('modal-root')
  )
}

export default Modal
