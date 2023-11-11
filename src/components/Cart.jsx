import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/ShoppingCartContext';
import { Box, Card, Heading, CardBody, CardHeader } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import "../styles/cart.css"

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
              <Link to="/">Volver al catálogo</Link>
            </div>
          ) : (
            <div>
              <ul >
                {cart.map((item) => (
                  <li key={item.id} >
                    <Box className='cart-items'>
                      <p>{item.name}</p>
                      <p>Cantidad: {item.quantity}</p>
                      <p>Precio: ${item.price}</p>
                      <button onClick={() => removeItem(item.id)}>
                        <DeleteIcon /> 
                      </button>
                    </Box>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CardBody>
      </Card>

      <Box display="flex" alignItems="center" justifyContent="space-between">
        <p>Total de elementos: {totalItems}</p>
        <p>Precio Total: ${totalPrice}</p>
        <button onClick={clear}>Vaciar Carrito</button>
        <Link to="/">Volver a la tienda</Link>
        <Link to="/">Continuar la compra</Link>
      </Box>
    </div>
  );
}

export default Cart;
