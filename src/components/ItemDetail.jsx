import React from 'react'
import { useParams } from 'react-router-dom'
import { Card, CardBody, CardFooter, Text, Stack, Heading, Divider, ButtonGroup, Button } from '@chakra-ui/react'

const ItemDetail = ({ productos }) => {

    const { id } = useParams()

    const filtrarproductos = productos.filter((producto) => producto.id == id)

    return (
        <>
            {filtrarproductos.map((p) => (
                <Card maxW='sm' key={p.id}>
                    <CardBody>
                        <Stack mt='6' spacing='3'>
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
                            <Button variant='solid' colorScheme='blue'>
                                Contador
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
            ))}
        </>
    );
};
        
export default ItemDetail