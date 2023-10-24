import React from 'react';
import { Card, CardBody, Stack, Heading, Text, ButtonGroup, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';


const Item = ({ name, id }) => {
  return (

    <Card maxW="sm">
      <CardBody>
        <Stack mt="6" spacing="3">
          <Heading size="md">{name}</Heading>
        </Stack>
        <Text>Imagen</Text>
      </CardBody>
      <ButtonGroup spacing="2">
        <Button variant="solid" colorScheme="blue">
          <Link to={`/product/${id}`}>Ver detalle</Link>
        </Button>
      </ButtonGroup>
    </Card>
  );
};

export default Item;

