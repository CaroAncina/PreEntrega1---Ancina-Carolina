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
                    <h1>Antojitos (logo)</h1>
                </Link>
            </Box>

            <Spacer />

            <Box className="list">
                <Link to={"/"}>
                    <Menu>
                        <div className="center-menu-button">
                            <MenuButton>
                                Tienda
                            </MenuButton>
                        </div>

                        <MenuList>
                            <Link to={"/categoria/Tortas"}>
                                <MenuItem>Tortas</MenuItem>
                            </Link>
                            <Link to={"/categoria/Tartas"}>
                                <MenuItem>Tartas</MenuItem>
                            </Link>

                            <Link to={"/categoria/Postres"}>
                                <MenuItem>Postres</MenuItem>
                            </Link>

                            <Link to={"/categoria/Variedades"}>
                                <MenuItem>Variedades</MenuItem>
                            </Link>
                        </MenuList>

                    </Menu>
                </Link>
            </Box>

            <Spacer />

            <Box className="list">
                <Link to={"/Cart"}>
                    <CartWidget />
                </Link>
            </Box>



        </Flex>
    )
}

export default Navbar