import React from 'react'
import "../src/styles/main.css"
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import Item from './components/Item'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import ItemDetailContainer from './components/ItemDetailContainer'


const App = () => {
  return (
    <div>

      <BrowserRouter>
      
        <Navbar />

        <Routes>

          <Route exact path='/home' element={<Home />} />
          <Route exact path='/' element={<ItemListContainer />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/product/:id' element={<ItemDetailContainer />} />
          <Route exact path='/categoria/:categoryid' element={<ItemListContainer />} />


        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App