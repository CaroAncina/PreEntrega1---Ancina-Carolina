import React from 'react'

import "../styles/main.css"
import "../styles/itemlistcontainer.css"

const ItemListContainer = ({ greeting }) => {
  return (
    <div className='item-list-container'>{greeting}</div>

  )

}

export default ItemListContainer