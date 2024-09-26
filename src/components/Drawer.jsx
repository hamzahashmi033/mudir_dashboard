'use client'
import { useDisclosure, Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerHeader, DrawerCloseButton, Button, Flex, MenuButton, Menu } from '@chakra-ui/react'
import Sidebar from './Sidebar'
const DrawerComp = ({ isOpen, onClose }) => {

    return (
        <>
            {/* Button to open the drawer */}


            {/* Drawer component */}
            <Drawer
                isOpen={isOpen}
                placement="left" // Drawer slides in from the left
                onClose={onClose}

            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton zIndex={100}/>
                    <DrawerBody bg={"#F4F6FA"}>
                        <Flex direction={"column"}  >
                            <Sidebar />
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}
export default DrawerComp