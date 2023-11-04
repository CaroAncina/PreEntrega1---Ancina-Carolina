import { useParams, Link } from 'react-router-dom'
import React, { useState } from 'react'
import { useCart } from '../context/ShoppingCartContext';
import { Card, CardBody, CardFooter, Text, Stack, Heading, Divider, ButtonGroup, Button, Image, Flex, Box, } from '@chakra-ui/react'

const ItemDetail = ({ productos }) => {

    const { id } = useParams()
    const { addItem } = useCart();

    const filtrarproductos = productos.filter((producto) => producto.id === id)

    const [count, setCount] = useState(0);

    return (
        <> <div className='item-detail'>

            {filtrarproductos.map((p) => (
                <Flex>
                    <Card maxW='sm' key={p.id}>
                        <CardBody>
                            <Stack mt='6' spacing='3'>
                                <Image className='image-product' src={p.image} alt={p.name} borderRadius='lg' />
                                <Heading size='md'>{p.name}</Heading>
                                <Text>{p.description}</Text>
                                <Text color='blue.600' fontSize='2xl'>
                                    ${p.price}
                                </Text>
                            </Stack>
                        </CardBody>

                        <Divider />

                        <CardFooter>
                            <ButtonGroup spacing='2'>
                                <Button variant='outline' colorScheme='green' onClick={() => setCount(count - 1)}
                                    m={1}
                                >-</Button>
                                <Button m={1}>{count}   </Button>
                                <Button variant='outline' colorScheme='green' onClick={() => setCount(count + 1)}
                                    m={1}
                                >+</Button>
                                <Link to={"/Cart"}>
                                    <Button onClick={() => addItem(p, count)}>Agregar al carrito</Button>
                                </Link>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                </Flex>
            ))}

        </div>
        </>
    );
};

export default ItemDetail