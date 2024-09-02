import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";


const PlatformSelector = () => {
  const { data: platforms, error } = usePlatforms();
  const selectedPlatformId = useGameQueryStore((state) => state.gameQuery.platformId);
  const setSelectedPlatformId = useGameQueryStore((state) => state.setPlatformId);
  // const { selectedPlatformId, setSelectedPlatformId } = useGameQueryStore((state) => ({
  //   selectedPlatformId: state.gameQuery.platformId,
  //   setSelectedPlatformId: state.setPlatformId,
  // }));

  const selectedPlatform = usePlatform(selectedPlatformId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {platforms?.results.map(platform => <MenuItem onClick={() => setSelectedPlatformId(platform.id)} key={platform.id}>{platform.name}</MenuItem>)}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;