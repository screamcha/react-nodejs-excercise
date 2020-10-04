import React from 'react'
import cn from 'classnames'
import { AppContext } from '../../context/AppContext'

import './ItemList.css'

const ItemList = ({ className }) => {
  const { items } = React.useContext(AppContext)

  return (
    <section className={cn('container', 'item-list', className)}>
      <ul className='list-group'>
        {items.map(item => (
          <li key={item.id} className='list-group-item list-group-item-action'>
            <div className='d-flex justify-content-between item'>
              <span className='item-info'>
                <span className='item-id mr-4'>{item.id}</span>
                <span className='item-name'>{item.name}</span>
              </span>
              <span className='item-quantity border border-dark'>{item.quantity}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ItemList
