// pkg
import { Flex, Icon, Text } from "@chakra-ui/react"
import { Link } from "react-scroll"
import styled from "styled-components"
// component
import ButtonM from "components/general/ButtonM"
import ButtonS from "components/general/ButtonS"
// image + icon
import { IconHandCoins } from "assets/icons"

const StyledLick = styled(Link)`
    display: inline-flex;
`

export default function NavList ({ direction }) {
    return (
        <Flex w="min-content"
              direction={direction}
              gap="sp3">
            <StyledLick to="donation" smooth={true} offset={-90} duration={800} >
                <ButtonM pointerEvents="none">
                    <Flex align="center" pointerEvents="none">
                        <Icon as={IconHandCoins} w="24px" h="24px" mr="sp2"/>
                        <Text as="span" fontWeight="900">小額捐款</Text>
                    </Flex>
                </ButtonM>
            </StyledLick>
            <StyledLick to="claims" smooth={true} offset={-90} duration={800} >
                <ButtonS mb="sp3" pointerEvents="none">候選主張</ButtonS>
            </StyledLick>
            <StyledLick to="latest" smooth={true} offset={-90} duration={800} >
                <ButtonS mb="sp3" pointerEvents="none">最新活動</ButtonS>
            </StyledLick>
            <StyledLick to="policy" smooth={true} offset={-90} duration={800} >
                <ButtonS mb="sp3" pointerEvents="none">政策議題</ButtonS>
            </StyledLick>
            <StyledLick to="mail" smooth={true} offset={-90} duration={800} >
                <ButtonS mb="sp3" pointerEvents="none">服務信箱</ButtonS>
            </StyledLick>
        </Flex>
    )
}