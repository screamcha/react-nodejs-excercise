import React from 'react'
import { AppContext } from '../../context/AppContext'

import './Header.css'

const Header = () => {
  const { cartItemsCount } = React.useContext(AppContext)

  const itemNoun = React.useMemo(
    () => cartItemsCount === 1 ? 'item' : 'items',
    [cartItemsCount]
  )

  return (
    <header className='container-fluid d-flex justify-content-between px-4 py-2 bg-light border-bottom align-items-center'>
      <h3 className='title m-0'>
        Test Application
      </h3>
      <aside>
        <span className='d-none d-sm-inline-block mr-2'>Total in cart:</span>
        <span className='cart-items border border-dark px-1 px-sm-3 py-1'>{cartItemsCount} {itemNoun}</span>
      </aside>
    </header>
  )
}

export default Header
