// pkg
import { Box, Image, Divider, useDisclosure, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent } from "@chakra-ui/react"
// component
import NavList from "components/header/navlist"
import SocialList from "components/header/sociallist"
// image + icon
import { ImgLogoText } from "assets/images"
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
                            <Image src={ImgLogoText} alt="ImgLogoText" />
                        </DrawerHeader>

                        <DrawerBody p="0">
                            <NavList />
                            <Divider my="sp3"/>
                            <SocialList />
                        </DrawerBody>
                    </Box>
                </DrawerContent>
            </Drawer>
        </>
    )
}