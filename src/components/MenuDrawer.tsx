import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay } from '@chakra-ui/react';
import React from 'react';
import useMenuDrawerStore from '../stores/useMenuDrawerStore';

interface MenuDrawerProps {
  children: React.ReactNode;
}

const MenuDrawer: React.FC<MenuDrawerProps> = ({ children }: MenuDrawerProps) => {
  const { isOpen, toggleMenuDrawer } = useMenuDrawerStore();

  return (
    <Drawer placement={'left'} isOpen={isOpen} onClose={toggleMenuDrawer}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerBody>
          {children}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default MenuDrawer;