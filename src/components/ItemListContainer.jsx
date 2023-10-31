import React from 'react';
import productosData from "../data/productos.json";
import { useParams } from 'react-router-dom';
import '../styles/main.css';
import Itemlist from './ItemList';

const ItemListContainer = () => {
  // USO USEPARAMS PARA FILTRAR CATEGORIAS
  const { categoryid } = useParams();

  // ARRAY DE PRODUCTOS OBTENIDO DEL ARCHIVO JSON
  const productos = productosData;

  // FUNCION PARA FILTRAR POR CATEGORIA
  const filtrarcategoria = productos.filter((producto) => producto.category === categoryid);

  // RETORNA LOS PRODUCTOS FILTRADOS POR CATEGORIA, SI NO, MUESTRA TODOS LOS PRODUCTOS
  return (
    <div className='item-list-container'>
      {categoryid ? <Itemlist productos={filtrarcategoria} /> : <Itemlist productos={productos} />}
    </div>
  );
}

export default ItemListContainer;
