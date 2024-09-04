import { Box } from '@chakra-ui/react'
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    //TODO: Implement the useDisclosure hook on a store
    return (
        <>
            <NavBar />
            <Box padding={5}>
                <Outlet />
            </Box>
        </>
    );
};

export default Layout;