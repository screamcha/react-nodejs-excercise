import React, { useEffect } from 'react'
import ItemsService from '../../services/ItemsService'

const App = () => {
  useEffect(() => {
    ItemsService.getItems().then(res => console.log(res))
  })

  return (
    <header>this is header</header>
  )
}

export default App
