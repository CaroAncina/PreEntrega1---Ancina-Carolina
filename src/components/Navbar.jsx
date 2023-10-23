import React from 'react'
import "../styles/navbar.css"
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (

        <Flex className='header'>

            <Box className="logo">
                <Link to={"/Home"}>
                    <h1>Antojitos</h1>
                </Link>
            </Box>

            <Spacer />
            <div className='nav'>
                <Box className="list">
                    <h1>Inicio</h1>
                </Box>
                <Spacer />
                <Box className="list">
                    <h1>Quienes Somos</h1>
                </Box>
                <Spacer />
                <Box className="list">
                    <h1>Productos</h1>
                </Box>
                <Spacer />
                <Box className="list">

                    <Link to={"/"}>
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
                    </Link>
                </Box>

                <Spacer />
                <Box className="list">
                    <h1>Contacto</h1>
                </Box>
                <Spacer />


                <Box className="list">
                    <Link to={"/Cart"}>
                        <CartWidget />
                    </Link>
                </Box>
            </div>


        </Flex>

    )
}

export default Navbar