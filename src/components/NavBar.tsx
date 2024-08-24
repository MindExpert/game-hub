import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
    onSearch: (searchText: string) => void;
    onIconClick: () => void
}

const NavBar: React.FC<Props> = ({ onSearch, onIconClick }: Props) => {
    return (
        <HStack padding='10px'>
            <Image src={logo} boxSize='60px' onClick={onIconClick} />
            <SearchInput onSearch={onSearch} />
            <ColorModeSwitch />
        </HStack>
    );
};

export default NavBar;