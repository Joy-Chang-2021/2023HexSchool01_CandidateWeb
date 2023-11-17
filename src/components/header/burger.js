// pkg
import { Box, Image, Divider, useDisclosure, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent } from "@chakra-ui/react"
// component
import NavList from "components/header/navlist"
import SocialList from "components/header/sociallist"
// image + icon
import { LogoBlack } from "assets/images"
import { IconBurger } from "assets/icons"

export default function Burger () {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        < >
            <Box as="button" onClick={onOpen}>
                <IconBurger />
            </Box>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <Box w="100%" h="100%" px="sp3" py="sp4">
                        <DrawerHeader mb="sp4" p="0">
                            <Image src={LogoBlack} alt="Logo" />
                        </DrawerHeader>

                        <DrawerBody p="0">
                            <NavList direction="column"/>
                            <Divider my="sp3"/>
                            <SocialList direction="column"/>
                        </DrawerBody>
                    </Box>
                </DrawerContent>
            </Drawer>
        </>
    )
}