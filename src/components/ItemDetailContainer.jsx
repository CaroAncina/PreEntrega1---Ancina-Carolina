import React from 'react';
import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const { id } = useParams()
  const [producto, setProducto] = useState([])

  useEffect(() => {
    const db = getFirestore()

    const oneItem = doc(db, "Productos dulces", `${id}`)

    getDoc(oneItem).then((snapshot) => {

      if (snapshot.exists()) {
        setProducto({ id: snapshot.id, ...snapshot.data() });
      }
    })
  }, [])

  return (
    <div className='item-detail-container'>
      <ItemDetail productos={producto} />
    </div>
  );
};

export default ItemDetailContainer;
