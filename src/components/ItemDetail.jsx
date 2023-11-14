import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import ItemCount from './ItemCount';
import { useCart } from '../context/ShoppingCartContext';
import { Card, CardBody, CardFooter, Text, Stack, Heading, Divider, Button, Image, Flex, Alert, AlertIcon, Box } from '@chakra-ui/react'
import '../styles/item-detail.css'

const ItemDetail = ({ productos }) => {
    const { addItem } = useCart();
    const [count, setCount] = useState(0);
    const [showAlert, setShowAlert] = useState(false);

    const handleDecrement = () => {
        setCount((prevCount) => Math.max(prevCount - 1, 0));
    };

    const handleIncrement = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const handleAddToCart = (e) => {
        e.preventDefault();
        if (count > 0) {
            addItem(productos, count);
            setShowAlert(true);
        }
    };


    useEffect(() => {
        const timeoutId = setTimeout(() => setShowAlert(false), 3000);
        return () => clearTimeout(timeoutId);
    }, [showAlert]);

    return (
        <>
            <div className='item-detail'>
                <Flex>
                    <Card maxW='sm' m='20px'  >
                        <CardBody>
                            <Stack mt='6' spacing='3'>
                                <Image className='image-product' src={productos.image} alt={productos.name} borderRadius='lg' />
                                <Heading size='md'>{productos.name}</Heading>
                                <Text>{productos.description}</Text>
                                <Text color='blue.600' fontSize='2xl'>
                                    ${productos.price}
                                </Text>
                            </Stack>
                        </CardBody>

                        <Divider />

                        <CardFooter display="flex" flexDirection='column' alignItems="center" justifyContent="space-between">
                            <Box m='10px' >
                                <ItemCount initial={count} onDecrement={handleDecrement} onIncrement={handleIncrement} />
                            </Box>

                            <Box m='10px'>
                                <Link to={"/"}>
                                    <Button m='1px' backgroundColor='#7ddeda' >Volver a la tienda</Button>
                                </Link>
                                <Link onClick={handleAddToCart}>
                                    <Button m='2px' backgroundColor='#7ddeda' >Agregar al carrito</Button>
                                </Link>
                            </Box>
                        </CardFooter>
                    </Card>
                </Flex>
            </div>

            {showAlert && (
                <Alert status='success' position='fixed' top='0' >
                    <AlertIcon />
                    Producto agregado al carrito
                </Alert>
            )}
        </>
    );
};

export default ItemDetail;
