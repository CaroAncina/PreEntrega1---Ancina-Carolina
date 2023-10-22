import React from 'react'
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

 const productos = [
    { id: "01", name: "Torta", description: "Descripcion", categoria: "Tortas", price: 5760 },
    { id: "02", name: "Tarta frutal", description: "Descripcion", categoria: "Tartas", price: 3000 },
    { id: "03", name: "Rosca de Pascua", description: "Descripcion", categoria: "Variedades", price: 1800 },
    { id: "04", name: "Torta marquise", description: "Descripcion", categoria: "Tortas", price: 3250 },
    { id: "05", name: "Cheesecake", description: "Descripcion", categoria: "Postres", price: 3500 },
    { id: "06", name: "Lemon Pie", description: "Descripcion", categoria: "Tartas", price: 2000 },
    { id: "07", name: "Pan dulce", description: "Descripcion", categoria: "Variedades", price: 1500 },
    { id: "08", name: "Muffins", description: "Descripcion", categoria: "Variedades", price: 4500 },
    { id: "09", name: "Budin marmolado", description: "Descripcion", categoria: "Variedades", price: 1250 },
    { id: "10", name: "Cookies", description: "Descripcion", categoria: "Variedades", price: 3500 },
  ]

  const mostrarproductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {

      setTimeout(() => {
        resolve(productos)
      }, 3000);
    } else {
      reject("No se encontraron productos")
    }
  })

  mostrarproductos
    .then((resultado) => {
      console.log(resultado)
    })
    .catch((error) => {
      console.log(error)
    })


  return (
    <>
      <ItemDetail productos={productos} />
    </>

  )
}

export default ItemDetailContainer