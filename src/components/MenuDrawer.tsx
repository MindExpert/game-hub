import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay } from '@chakra-ui/react';
import React from 'react';

interface MenuDrawerProps {
  isOpen: boolean
  children: React.ReactNode;
  onClose: () => void;
}

const MenuDrawer: React.FC<MenuDrawerProps> = ({ children, isOpen, onClose }: MenuDrawerProps) => {
  return (
    <Drawer placement={'left'} isOpen={isOpen} onClose={onClose}>
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