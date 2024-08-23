import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar: React.FC = () => {
    return (
        <HStack spacing={2} justifyContent='space-between' paddingX='10px' paddingY='5px'>
            <Image src={logo} boxSize='60px' />
            <ColorModeSwitch />
        </HStack>
    );
};

export default NavBar;