import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import ItemCount from './ItemCount';
import { useCart } from '../context/ShoppingCartContext';
import { Card, CardBody, CardFooter, Text, Stack, Heading, Divider, Button, Image, Flex } from '@chakra-ui/react'

const ItemDetail = ({ productos }) => {
    const { addItem } = useCart();
    const [count, setCount] = useState(0);

    const handleDecrement = () => {
        setCount((prevCount) => Math.max(prevCount - 1, 0));
    };

    const handleIncrement = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const handleAddToCart = () => {
        addItem(productos,count);
    };

    return (
        <> <div className='item-detail'>
            <Flex>
                <Card maxW='sm' >
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

                    <CardFooter>
                        <ItemCount initial={count} onDecrement={handleDecrement} onIncrement={handleIncrement} />
                        <Link to={"/"}>
                            <Button onClick={handleAddToCart}>Agregar al carrito</Button>
                        </Link>
                    </CardFooter>
                </Card>
            </Flex>
        </div>
        </>
    );
};

export default ItemDetail