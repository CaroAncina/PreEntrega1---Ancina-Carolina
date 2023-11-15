import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Box, Flex, Image } from "@chakra-ui/react";
import '../styles/footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <Flex justifyContent="space-around" alignItems="center">
                <Box className="social-icons">
                    <FaFacebook className="icon" />
                    <FaTwitter className="icon" />
                    <FaInstagram className="icon" />
                </Box>
                <Box className="payment-icons">
                    <Image src="/public/efectivo.png" alt="Efectivo" boxSize="30px" />
                    <Image src="/public/mercado-pago.png" alt="Mercado Pago" boxSize="30px" />
                </Box>
            </Flex>
            <p>&copy; 2023 Antojitos</p>
        </footer>
    );
};

export default Footer;
