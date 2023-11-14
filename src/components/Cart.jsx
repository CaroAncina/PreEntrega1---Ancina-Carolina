import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/ShoppingCartContext';
import { Box, Card, Heading, CardBody, CardHeader, Button, Text } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import "../styles/cart.css"
import '../styles/main.css'

const Cart = () => {
  const { cart, removeItem, clear } = useCart();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <Card>
        <CardHeader>
          <Heading size="md">Tu carrito de compras</Heading>
        </CardHeader>

        <CardBody>
          {cart.length === 0 ? (
            <div>
              <p>Tu carrito de compras está vacío.</p>
            </div>
          ) : (
            <div>
              <ul className='cart-list'>
                {cart.map((item) => (
                  <li key={item.id} className='cart-item'>
                    <Box className='cart-items'>
                      <p>{item.name}</p>
                      <p>Cantidad: {item.quantity}</p>
                      <p>Precio: ${item.price}</p>
                      <Button colorScheme="red" onClick={() => removeItem(item.id)}>
                        <DeleteIcon />
                      </Button>
                    </Box>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CardBody>
      </Card>

      <Box display="flex" alignItems="center" justifyContent="space-evenly" mt="4">
        <Text fontSize='2xl' as='i' > Cantidad de productos: {totalItems}</Text>
        <Text fontSize='2xl' as='i' > Precio Total: ${totalPrice} </Text>
        <Button backgroundColor='#E9D8FD' onClick={clear}>Vaciar Carrito</Button>
        <Link to="/">
          <Button backgroundColor='#E9D8FD' > Volver a la tienda </Button>
        </Link>
        <Link to={cart.length > 0 ? "/send-orders" : "/"} >
          <Button backgroundColor='#E9D8FD' >
            Continuar la compra
          </Button>
        </Link>
      </Box>
    </div>
  );
}

export default Cart;
