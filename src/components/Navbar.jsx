import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from '@chakra-ui/react'

const Navbar = () => {
    return (
        <div>

            <Flex>
                <Box>
                    {/*brand (logo del ecommerce)*/}
                    <h1>Antojitos</h1>
                </Box>
                <Spacer />
                <Box>
                    <h1>Inicio</h1>
                </Box>
                <Spacer />
                <Box>
                    <h1>Quienes Somos</h1>
                </Box>
                <Spacer />
                <Box>
                    <h1>Productos</h1>
                </Box>
                <Spacer />
                <Box>
                    <Menu>
                        <MenuButton>
                            Tienda
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Todos nuestros productos</MenuItem>
                            <MenuItem>Tortas</MenuItem>
                            <MenuItem>Tartas</MenuItem>
                            <MenuItem>Postres</MenuItem>
                            <MenuItem>Variedades</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Spacer />
                <Box>
                    <h1>Contacto</h1>
                </Box>
                <Spacer />
                <Box>
                    {/*carrito*/}
                    <CartWidget />
                </Box>
            </Flex>

        </div>
    )
}

export default Navbar