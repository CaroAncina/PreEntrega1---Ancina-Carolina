import React from 'react';
import { useParams } from 'react-router-dom';
import "../styles/main.css";
import Itemlist from './ItemList';

const ItemListContainer = () => {

  //USO USEPARAMS PARA FILTRAR CATEGORIAS
  const { categoryid } = useParams();

  //ARRAY DE PRODUCTOS
  const productos = [
    { id: "01", name: "Torta", description: "Descripcion", category: "Tortas", price: 5760 },
    { id: "02", name: "Tarta frutal", description: "Descripcion", category: "Tartas", price: 3000 },
    { id: "03", name: "Rosca de Pascua", description: "Descripcion", category: "Variedades", price: 1800 },
    { id: "04", name: "Torta marquise", description: "Descripcion", category: "Tortas", price: 3250 },
    { id: "05", name: "Cheesecake", description: "Descripcion", category: "Postres", price: 3500 },
    { id: "06", name: "Lemon Pie", description: "Descripcion", category: "Tartas", price: 2000 },
    { id: "07", name: "Pan dulce", description: "Descripcion", category: "Variedades", price: 1500 },
    { id: "08", name: "Muffins", description: "Descripcion", category: "Variedades", price: 4500 },
    { id: "09", name: "Budin marmolado", description: "Descripcion", category: "Variedades", price: 1250 },
    { id: "10", name: "Cookies", description: "Descripcion", category: "Variedades", price: 3500 },
  ];

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

  //FUNCION PARA FILTRAR POR CATEGORIA
  const filtrarcategoria = productos.filter((producto) => producto.category === categoryid);

  //RETORNA LOS PRODUCTOS FILTRADOS POR CATEGORIA, SI NO, MUESTRA TODOS LOS PRODUCTOS
  return (
    <>
      {categoryid ? <Itemlist productos={filtrarcategoria} /> : <Itemlist productos={productos} />}
    </>
  )
}

export default ItemListContainer;
