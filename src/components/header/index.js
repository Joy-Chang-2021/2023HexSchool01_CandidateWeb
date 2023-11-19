// pkg
import { Box, Flex, Image } from "@chakra-ui/react"
import { animateScroll as scroll } from "react-scroll"
// component
import NavList from "components/header/navlist"
import SocialList from "components/header/sociallist"
import Burger from "components/header/burger"
// image + icon
import { LogoBlack } from "assets/images"

export default function Header () {
    return (
        <Flex as="header" 
            position="fixed" zIndex="500" 
            top="0" left="50%" transform="translateX(-50%)"
            w="100%" maxW={{ base: "576px", md:"1280px"}} mx="auto"
            px={{ base: "sp3", md: "sp6" }}
            justify="space-between" align="center" py="16px"
            bgColor="gray.100">
            <Image src={LogoBlack} alt="Logo" cursor="pointer"
                   onClick={() => scroll.scrollToTop()}/>

            <Box hideBelow="lg">
                <NavList direction="row"/>
            </Box>

            <Box hideBelow="lg">
                <SocialList />
            </Box>
            
            <Flex hideFrom="lg">
                <Burger direction="row"/>
            </Flex>

        </Flex>
    )
}