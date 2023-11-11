import React from 'react';
import { useState } from 'react';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import { FormControl, Input, FormLabel, FormHelperText, Button } from '@chakra-ui/react';

const SendOrders = () => {
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

    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
  };

  return (
    <div>
      <h1>Formulario de compra</h1>

      <form action="" onSubmit={handleSubmit}>
        <FormControl>
        <FormLabel>Nombre y Apellido</FormLabel>
          <Input type="text" placeholder="Nombre medium size" size="md" onChange={(e) => setNombre(e.target.value)} />
          <FormLabel>Email address</FormLabel>
          <Input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <FormHelperText>We'll never share your email.</FormHelperText>

          <Button type="submit" colorScheme="blue">
            Enviar
          </Button>
        </FormControl>
      </form>

      <p>Número de orden: {orderId}</p>
    </div>
  );
};

export default SendOrders;
