"use client"
import { Box, Center, Grid, Image, Icon, Flex, Text } from "@chakra-ui/react"
import styled from "styled-components"

// component
import ButtonM from "components/general/ButtonM"
// 
import { IconElection, IconNo1, ArrowRight } from "assets/icons"
import { BlackCat1 } from "assets/images"

const StyledBannerContainer = styled(Flex)`
    position: absolute;
    z-index: -10;
    left: 50%;
    transform: translateX(-50%);
    bottom: 5px;
    width: 105%;
    height: 240px;
    flex-direction: column;
    justify-content: space-between;
    padding: var(--chakra-space-sp3);
    padding-bottom: var(--chakra-space-sp2);
    border-radius: 16px;
    background-color: var(--chakra-colors-gray-300);
    @media (min-width: 992px) {
        max-width: 1152px;
        max-height: 640px;
        width: 100%;
        height: 100%;
        bottom: 50%;
        transform: translate(-50%, 50%);
    }
`
const StyledBarContainer = styled(Grid)`
    position: absolute;
    top: 50%;
    left: var(--chakra-space-sp3);
    transform: translate(0, -50%);
    grid-template-columns: repeat(5, 1fr);
    grid-gap: var(--chakra-space-sp2);
    align-items: center;
    justify-items: center;
    padding: var(--chakra-space-sp1) var(--chakra-space-sp3);
    border-radius: 48px;
    width: min-content;
    font-size: 24px;
    font-weight: 700;
    line-height: 1.5;
    color: var(--chakra-colors-primary-300);
    background-color: var(--chakra-colors-gray-600);
    @media (min-width: 992px) {
        font-size: 48px;
    }
`


export default function Candidate () {
    return (
        <Box position="relative"
             h="calc(100vh - 80px)">
            <Box position="absolute" w={{ lg: "361px" }}
                 right={{lg: "-3%"}} bottom={{ base: "225px", lg: "10%" }}>
                <Center>
                    <Image src={BlackCat1}/>
                    <Box position="absolute" left="8%" bottom="10%">
                        <ButtonM >
                            <Flex textStyle="body16" gap="sp2" align="center" pointerEvents="none">
                                <Text>候選人簡介</Text>
                                <Icon as={ArrowRight} w="24px" h="24px"/>
                            </Flex>
                        </ButtonM>
                    </Box>
                </Center>
            </Box>
            <StyledBannerContainer>
                <Text color="gray.100"
                      fontSize={{ base: "80px", lg: "200px", xl: "260px" }}
                      fontWeight="700"
                      lineHeight={{ base: "1", lg: "1.5", xl: "1"}}>
                    貓貓權益
                </Text>
                <Text color="gray.100" fontSize={{ base: "80px", lg: "200px", xl: "260px" }}
                      fontWeight="700"
                      lineHeight={{ base: "1", lg: "1.5", xl: "1"}}>
                    我帶頭
                </Text>
                <StyledBarContainer >
                    <Icon as={IconElection}/>
                    <Text w="max-content">立委請支持</Text>
                    <Icon as={IconNo1}/>
                    <Text w="max-content">黑新星</Text>
                    <Icon as={IconElection}/>
                </StyledBarContainer>
            </StyledBannerContainer>
        </Box>
    )
}