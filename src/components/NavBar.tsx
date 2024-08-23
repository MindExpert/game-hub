import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";

const NavBar: React.FC = () => {
    return (
        <HStack spacing={2}>
            <Image src={logo} boxSize='60px' />
            <Text fontSize='xl' fontWeight='bold'>My App</Text>
        </HStack>
    );
};

export default NavBar;