import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

const Home = () => {
  return (
    <div>
      <Box className='home-style' position='relative'>
        <Image src="/fondo-portada.jpg" alt="fondo" width="100%" height="auto" zIndex="-1" />
        <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" textAlign="center">
          <Text color="black" fontSize="4xl" fontWeight="bold">¿Quiénes Somos?</Text>
          <Text color="black" fontSize="2xl">
            Somos un emprendimiento familiar que lleva 3 años en el rubro de la pastelería y desde entonces hemos crecido considerablemente.
            Realizamos mesas dulces para cumpleaños, casamientos y/o cualquier evento.
            Te brindamos los mejores productos con la mejor calidad. Podes conocer nuestros productos
            a traves de la tienda, o a traves de nuestras redes sociales.
          </Text>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
