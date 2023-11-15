// pkg
import { Box, Grid, Flex, Icon } from "@chakra-ui/react"
// component
import ButtonS from "components/general/ButtonS"
// image + icon
import { IconFacebook, IconInstagram, IconYoutube } from "assets/icons"

// TODO: Icon Hover Effect
// TODO: Text Align Center Style D:

export default function SocialList () {
    return (
        <Grid w="min-content"
              templateRows={{ base: "repeat(3, 1fr)", md: "1fr" }}
              templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
              gap="sp3">
            <ButtonS>
                <Flex role="group" align="center">
                    <Icon as={IconFacebook} w="sp4" h="sp4" />
                    <Box hideFrom="md" mt="2px" ml="sp1" lineHeight="28px">Facebook</Box>
                </Flex>
            </ButtonS>
            <ButtonS>
                <Flex role="group" align="center">
                    <Icon as={IconInstagram} w="sp4" h="sp4" />
                    <Box hideFrom="md" mt="2px" ml="sp1" lineHeight="28px">Instagram</Box>
                </Flex>
            </ButtonS>
            <ButtonS>
                <Flex role="group" align="center">
                    <Icon as={IconYoutube} w="sp4" h="sp4" />
                    <Box hideFrom="md" mt="2px" ml="sp1" lineHeight="28px">Youtube</Box>
                </Flex>
            </ButtonS>
        </Grid>
    )
}