import { Switch, HStack, Text } from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";

const ColorModeSwitch = () => {
    const { toggleColorMode } = useColorMode();
    const isDarkMode = useColorModeValue(false, true);

    return (
        <HStack>
            <Switch
                isChecked={isDarkMode}
                onChange={toggleColorMode}
                colorScheme="green"
            />
            <Text whiteSpace='nowrap' fontSize="sm">Dark Mode</Text>
        </HStack>
    );
};

export default ColorModeSwitch;