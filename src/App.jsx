import React from 'react'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import ItemDetailContainer from './components/ItemDetailContainer'
import { ShoppingCartContext } from './context/ShoppingCartContext'
import SendOrders from './components/SendOrders'
import './styles/main.css'


const App = () => {
  return (
    <div>

      <BrowserRouter>
        <ShoppingCartContext>
          <Navbar />
          <Routes>
            <Route exact path='/home' element={<Home />} />
            <Route exact path='/' element={<ItemListContainer />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='/product/:id' element={<ItemDetailContainer />} />
            <Route exact path='/categoria/:categoryid' element={<ItemListContainer />} />
            <Route exact path='/send-orders' element={<SendOrders />} />
          </Routes>
        </ShoppingCartContext>

      </BrowserRouter>

    </div>
  )
}

export default App