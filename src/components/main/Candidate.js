"use client"
import { Box, Center, Image, Icon, Flex, Text } from "@chakra-ui/react"
import styled from "styled-components"
// component
import ButtonM from "components/general/ButtonM"
// icon + image
import { IconElection, IconNo1, ArrowRight } from "assets/icons"
import { BlackCat1 } from "assets/images"

const BannerContainer = styled(Flex)`
    // self position
    position: absolute;
    bottom: 3px;
    min-width: 375px;
    max-width: 1152px;
    width: calc(100vw - 20px);
    aspect-ratio: 375 / 240;
    // self + inner layout
    flex-direction: column;
    justify-content: space-between;
    padding: 1.5em 1em 0 1em;
    // style
    border-radius: 16px;
    color: var(--chakra-colors-gray-100);
    background-color: var(--chakra-colors-gray-300);
    // rwd
    @media (min-width: 992px) {
        bottom: unset;
    }
`

const ImageContainer = styled(Box)`
    // position
    position: absolute;
    left: 50%;
    transform: translate(-50%, -100%);
    // layout
    width: 305px;
    aspect-ratio: 305 / 344;
    // rwd
    @media (min-width: 992px) {
        left: unset;
        right: 0;
        bottom: 0;
        transform: translate(5%, 5%);
        width: 361px;
    }
`

const BannerText = styled(Text)`
    font-size: clamp(10vw, 20vw, 260px);
    line-height: 1.25;
    font-weight: 700;
    letter-spacing: 4px;
    @media (min-width: 992px) {
        letter-spacing: 13px;
    }
`

const BarContainer = styled(Flex)`
    // position
    position: absolute;
    top: 50%;
    transform: translate(0, -35%);
    // layout
    min-width: 352px;
    width: max-content;
    max-height: 640px;
    aspect-ratio: 352 / 44;
    align-items: center;
    justify-content: center;
    gap: var(--chakra-space-sp2);
    // style
    padding: var(--chakra-space-sp1) var(--chakra-space-sp3);
    border-radius: 4em;
    color: var(--chakra-colors-primary-300);
    background-color: var(--chakra-colors-gray-600);
    // rwd
    @media (min-width: 992px) {
        transform: translate(-10%, -50%);
        padding: var(--chakra-space-sp2) var(--chakra-space-sp4);
    }
`

const BarText = styled(Text)`
    font-size: clamp(24px, 6vw, 72px);
    font-weight: 700;
    line-height: 1.5;
    white-space: nowrap;
`

const BarIconContainer = styled(Center)`
    min-width: 30px;
    max-width: 72px;
    width: 4vw;
    aspect-ratio: 1 /1;
`

export default function Candidate () {
    return (
        <Center position="relative" h="calc(100vh - 80px)" >
            <BannerContainer>
                {/* 貓咪圖片 + 按鈕 */}
                <ImageContainer>
                    {/* 圖片 */}
                    <Image src={BlackCat1} w="100%"/>
                    {/* 按鈕 */}
                    <Box position="absolute" left="-5%" bottom="15%">
                        <ButtonM >
                            <Flex textStyle="body16" gap="sp2" align="center" color="gray.600" pointerEvents="none">
                                <Text>候選人簡介</Text>
                                <Icon as={ArrowRight} w="24px" h="24px"/>
                            </Flex>
                        </ButtonM>
                    </Box>
                </ImageContainer>
                {/* 文字 */}
                <BannerText>貓貓權益</BannerText>
                <BannerText>我帶頭</BannerText>
                {/* 橫幅 */}
                <BarContainer>
                    {/* icon */}
                    <BarIconContainer p="0.2vw">
                        <Icon as={IconElection}  w="100%" h="100%"/>
                    </BarIconContainer>
                    {/* text */}
                    <BarText>立委請支持</BarText>
                    {/* icon */}
                    <BarIconContainer p={{ base: "0.1vw", lg: "0" }}>
                        <Icon as={IconNo1}  w="100%" h="100%"/>
                    </BarIconContainer>
                    {/* text */}
                    <BarText>黑新星</BarText>
                    {/* icon */}
                    <BarIconContainer p="0.2vw">
                        <Icon as={IconElection}  w="100%" h="100%"/>
                    </BarIconContainer>
                </BarContainer>
            </BannerContainer>
        </Center>
    )
}