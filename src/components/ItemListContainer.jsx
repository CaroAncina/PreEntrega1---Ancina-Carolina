import React from 'react';
import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { useParams } from 'react-router-dom';
import '../styles/main.css';
import Itemlist from './ItemList';

const ItemListContainer = () => {
  // USO USEPARAMS PARA FILTRAR CATEGORIAS
  const { categoryid } = useParams();

  const [productos, setProductos] = useState([])

  useEffect(() => {
    const db = getFirestore()
    const itemsCollection = collection(db, "Productos dulces")

    getDocs(itemsCollection).then((response) => {
      setProductos(response.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      //const docs = snapshot.docs.map((doc) => doc.data())
  
    })
  }, [])

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
