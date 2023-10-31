import React from 'react';
import ItemDetail from './ItemDetail';
import productosData from "../data/productos.json";

const ItemDetailContainer = () => {
  // ARRAY DE PRODUCTOS OBTENIDO DEL ARCHIVO JSON
  const productos = productosData;

  return (
    <div className='item-detail-container'>
      <ItemDetail productos={productos} />
    </div>
  );
};

export default ItemDetailContainer;
