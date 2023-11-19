// pkg
import { Box, Flex, Icon } from "@chakra-ui/react"
// component
import ButtonS from "components/general/ButtonS"
// image + icon
import { IconFacebook, IconInstagram, IconYoutube } from "assets/icons"

export default function SocialList ({ direction }) {
    return (
        <Flex w="min-content"
              direction={direction}
              gap="sp3">
            <ButtonS >
                <Flex role="group" align="center">
                    <Icon as={IconFacebook} w="sp4" h="sp4" />
                    {direction === "column" && <Box mt="2px" ml="sp1" lineHeight="28px">Facebook</Box>}
                </Flex>
            </ButtonS>
            <ButtonS>
                <Flex role="group" align="center">
                    <Icon as={IconInstagram} w="sp4" h="sp4" />
                    {direction === "column" && <Box mt="2px" ml="sp1" lineHeight="28px">Instagram</Box>}
                </Flex>
            </ButtonS>
            <ButtonS>
                <Flex role="group" align="center">
                    <Icon as={IconYoutube} w="sp4" h="sp4" />
                    {direction === "column" && <Box mt="2px" ml="sp1" lineHeight="28px">Youtube</Box>}
                </Flex>
            </ButtonS>
        </Flex>
    )
}