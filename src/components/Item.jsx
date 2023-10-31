import React from 'react';
import { Card, CardBody, Stack, Heading, Text, ButtonGroup, Button, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import "../styles/item.css"

const Item = ({ name, id, image }) => {
  return (
    <div className='item-product'>

      <Card className='product-card' maxW="sm">
        <CardBody>
          <Stack mt="6" spacing="3">
            <Heading size="md">{name}</Heading>
          </Stack>
          <Image className='image-product' src={image} alt={name}  borderRadius='lg' />
        </CardBody>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            <Link to={`/product/${id}`}>Ver detalle</Link>
          </Button>
        </ButtonGroup>
      </Card>

    </div>
  );
};

export default Item;

