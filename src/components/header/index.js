// pkg
import { Box, Flex, Image } from "@chakra-ui/react"
// component
import NavList from "components/header/navlist"
import SocialList from "components/header/sociallist"
import Burger from "components/header/burger"
// image + icon
import { ImgLogoText } from "assets/images"

export default function Header () {
    return (
        <Flex as="header" justify="space-between" align="center" py="16px">
            <Image src={ImgLogoText} alt="ImgLogoText" />

            <Box hideBelow="md">
                <NavList />
            </Box>

            <Box hideBelow="md">
                <SocialList hideBelow="md"/>
            </Box>
            
            <Flex hideFrom="md">
                <Burger />
            </Flex>

        </Flex>
    )
}