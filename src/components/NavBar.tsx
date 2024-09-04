import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import useMenuDrawerStore from "../stores/useMenuDrawerStore";

const NavBar = () => {
    const { toggleMenuDrawer } = useMenuDrawerStore();

    return (
        <HStack padding='10px'>
            <Image src={logo} boxSize='60px' onClick={toggleMenuDrawer} />
            <SearchInput />
            <ColorModeSwitch />
        </HStack>
    );
};

export default NavBar;