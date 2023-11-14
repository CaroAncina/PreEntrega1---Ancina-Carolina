import React from 'react';
import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { useParams } from 'react-router-dom';
import { Spinner} from '@chakra-ui/react'
import Itemlist from './ItemList';
import '../styles/main.css';
import '../styles/item-list-container.css'

const ItemListContainer = () => {
  const { categoryid } = useParams();
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore()
    const itemsCollection = collection(db, "Productos dulces")

    getDocs(itemsCollection).then((response) => {
      setProductos(response.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    })

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [])

  const filterproducts = categoryid
    ? productos.filter((producto) => producto.category === categoryid)
    : productos;

  return (
    <div className='item-list-container'>
      {loading ? (
      <Spinner
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='blue.500'
      size='xl'
    />
      ) : (
        <Itemlist productos={filterproducts} />
      )}
    </div>
  );
};

export default ItemListContainer;
