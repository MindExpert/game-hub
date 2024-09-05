import { Switch, HStack, useMediaQuery } from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { MoonIcon, SunIcon, DragHandleIcon } from "@chakra-ui/icons";
import useMenuDrawerStore from "../stores/useMenuDrawerStore";

const ColorModeSwitch = () => {
    const { toggleColorMode } = useColorMode();
    const { toggleMenuDrawer } = useMenuDrawerStore();
    const [isDesktopSize] = useMediaQuery('(min-width: 992px)')
    const isDarkMode = useColorModeValue(false, true);

    return (
        <HStack>
            <Switch
                isChecked={isDarkMode}
                onChange={toggleColorMode}
                colorScheme="green"
                size='lg'
                position='relative'
            >
                {
                    isDarkMode
                        ? <MoonIcon
                            position={'absolute'}
                            top='-10px'
                            right='-10px'
                            color={'gray.300'}
                            m='1rem' />
                        : <SunIcon position={'absolute'}
                            top='-10px'
                            left='-10px'
                            color={'red.300'}
                            m='1rem' />
                }
            </Switch>
            {
                !isDesktopSize &&
                <DragHandleIcon
                    color='gray.300'
                    onClick={toggleMenuDrawer}
                    cursor='pointer'
                    w={6}
                    h={6}
                />
            }
        </HStack>
    );
};

export default ColorModeSwitch;