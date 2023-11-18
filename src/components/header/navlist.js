// pkg
import { Flex, Icon, Text } from "@chakra-ui/react"
// component
import ButtonM from "components/general/ButtonM"
import ButtonS from "components/general/ButtonS"
// image + icon
import { IconHandCoins } from "assets/icons"

export default function NavList ({ direction }) {
    return (
        <Flex w="min-content"
              direction={direction}
              gap="sp3">
            <ButtonM>
                <Flex align="center" pointerEvents="none">
                    <Icon as={IconHandCoins} w="24px" h="24px" mr="sp2"/>
                    <Text as="span" fontWeight="900">小額捐款</Text>
                </Flex>
            </ButtonM>
            <ButtonS mb="sp3">候選主張</ButtonS>
            <ButtonS mb="sp3">最新活動</ButtonS>
            <ButtonS mb="sp3">政策議題</ButtonS>
            <ButtonS mb="sp3">服務信箱</ButtonS>
        </Flex>
    )
}