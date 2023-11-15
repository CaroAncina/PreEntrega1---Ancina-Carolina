import React from 'react';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
import { ShoppingCartContext } from './context/ShoppingCartContext';
import SendOrders from './components/SendOrders';
import './styles/main.css';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ShoppingCartContext>
          <Navbar />
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/product/:id' element={<ItemDetailContainer />} />
            <Route path='/categoria/:categoryid' element={<ItemListContainer />} />
            <Route path='/send-orders' element={<SendOrders />} />
          </Routes>
          <Footer />
        </ShoppingCartContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
