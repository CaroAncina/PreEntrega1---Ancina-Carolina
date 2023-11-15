import React, { useState } from 'react';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import { FormControl, Input, FormLabel, Button, Flex } from '@chakra-ui/react';
import { useCart } from '../context/ShoppingCartContext';
import { Link } from 'react-router-dom';
import '../styles/send-orders.css';

const SendOrders = () => {
  const { clear: clearCart } = useCart();
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [orderId, setOrderId] = useState(null);

  const db = getFirestore();
  const ordersCollection = collection(db, 'MiOrden');

  const handleSubmit = (e) => {
    e.preventDefault();

    const order = {
      nombre,
      email,
    };

    addDoc(ordersCollection, order)
      .then(({ id }) => {
        setOrderId(id);
        clearCart();
      })
      .catch((error) => console.error('Error al enviar la orden:', error));
  };

  return (
    <div className="form-style">
      <h1>Formulario de compra</h1>

      <form action="" onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel m="5px">Nombre y Apellido</FormLabel>
          <Input type="text" placeholder="Ingresar nombre y apellido" size="md" onChange={(e) => setNombre(e.target.value)} />
          <FormLabel m="5px">Correo electrónico</FormLabel>
          <Input type="email" placeholder="Ingresar Email" onChange={(e) => setEmail(e.target.value)} />

          <Button type="submit" colorScheme="blue" m="10px">
            Enviar
          </Button>
        </FormControl>
      </form>

      <p>Número de orden: {orderId}</p>

      <Link to={"/"}>
        <Flex justify="center" align="center" height="auto">
          <Button >Volver a la tienda</Button>
        </Flex>
      </Link>
    </div>
  );
};

export default SendOrders;
