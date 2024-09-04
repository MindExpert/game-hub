import { Box, useDisclosure } from '@chakra-ui/react'
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    //TODO: Implement the useDisclosure hook on a store
    const { isOpen, onOpen, onClose } = useDisclosure()
    const handleDrawerToggle = () => {
        if (isOpen) {
            onClose()
        } else {
            onOpen()
        }
    }

    return (
        <>
            <NavBar onIconClick={() => handleDrawerToggle()} />
            <Box padding={5}>
                <Outlet />
            </Box>
        </>
    );
};

export default Layout;