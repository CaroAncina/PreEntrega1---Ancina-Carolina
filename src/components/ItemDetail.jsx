import { useParams } from 'react-router-dom'
import React, {useState} from 'react'
import { Card, CardBody, CardFooter, Text, Stack, Heading, Divider, ButtonGroup, Button } from '@chakra-ui/react'

const ItemDetail = ({ productos }) => {

    const { id } = useParams()

    const filtrarproductos = productos.filter((producto) => producto.id == id)

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

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
                        <Button variant='outline' colorScheme='green' onClick={decrement}>
                            -
                        </Button>
                        <Text>Cantidad: {count}</Text>
                        <Button variant='outline' colorScheme='green' onClick={increment}>
                            +
                        </Button>
                    </ButtonGroup>
                </CardFooter>
                </Card>
            ))}
        </>
    );
};
        
export default ItemDetail