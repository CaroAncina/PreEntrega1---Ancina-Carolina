import React from 'react'
import "../src/styles/main.css"
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'


const App = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting = {"Bienvenido a mi E-commerce"}/>

    </div>
  )
}

export default App