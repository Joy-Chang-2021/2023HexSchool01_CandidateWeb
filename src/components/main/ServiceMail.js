"use client"
import { Box, Flex, Text, Image, Input, Textarea } from "@chakra-ui/react"
import styled from "styled-components"
// component
import ButtonL from "components/general/ButtonL"
// image
import { BlackCat2 } from "assets/images"

export default function ServiceMail () {
    return (
        <Flex id="mail" direction={{ base: "column", lg: "row" }} my="sp4" gap="sp4">
            {/* 文字說明 */}
            <Box w={{ lg: "43%" }}>
                <Box color="primary.500" mb={{ base: "sp3", lg: "sp4" }}>
                    <Text textStyle="title48">服務信箱</Text>
                    <Text textStyle="title20">Service Mail</Text>
                </Box>
                <Box>
                    <Text mb="sp3" textStyle="title28">您的聲音，我們的行動！</Text>
                    <Text textStyle="body16">親愛的鄉親，每一位市民的意見都是我們社區前進的原動力。無論大小事，我都誠摯希望聽到您的建議。分享您的想法，一同為我們的未來打造更美好！</Text>
                </Box>
            </Box>
            {/* 表單 */}
            <Box w={{ lg: "calc(100% - 43% - 32px)" }}
                 px={{ base: "sp3", lg: "sp4" }} py="sp4"
                 borderRadius="16px" bgColor="primary.100"
                 pos="relative">
                <Box hideBelow="lg"
                     pos="absolute" left="0" bottom="0"
                     transform="translateX(-75%)" zIndex="-5"
                     w="297px">
                    <Image src={BlackCat2} />
                </Box>
                <Flex direction="column" gap="sp3" mb="sp5">
                    <Flex direction="column" gap="sp2">
                        <Text textStyle="body16">姓名</Text>
                        <Input textStyle="body14" h="56px" p="sp3" bgColor="gray.100" autoComplete="off"
                               _focus={{ border: "2px solid", borderColor: "primary.500" }}
                               _hover={{ border: "2px solid", borderColor: "primary.500" }}
                               _focusVisible={{ border: "2px solid", borderColor: "primary.500" }}/>
                    </Flex>
                    <Flex direction="column" gap="sp2">
                        <Text textStyle="body16">Email</Text>
                        <Input textStyle="body14" h="56px" p="sp3" bgColor="gray.100" autoComplete="off"
                               _focus={{ border: "2px solid", borderColor: "primary.500" }}
                               _hover={{ border: "2px solid", borderColor: "primary.500" }}
                               _focusVisible={{ border: "2px solid", borderColor: "primary.500" }}/>
                    </Flex>
                    <Flex direction="column" gap="sp2">
                        <Text textStyle="body16">電話 / 手機</Text>
                        <Input type="tel" textStyle="body14" h="56px" p="sp3" bgColor="gray.100" autoComplete="off"
                               _focus={{ border: "2px solid", borderColor: "primary.500" }}
                               _hover={{ border: "2px solid", borderColor: "primary.500" }}
                               _focusVisible={{ border: "2px solid", borderColor: "primary.500" }}/>
                    </Flex>
                    <Flex direction="column" gap="sp2">
                        <Text textStyle="body16">對我們的建議</Text>
                        <Textarea textStyle="body14"
                                resize="none" h="116px"
                                p="sp3" bgColor="gray.100"
                                autoComplete="off"
                                _focus={{ border: "2px solid", borderColor: "primary.500" }}
                                _hover={{ border: "2px solid", borderColor: "primary.500" }}
                                _focusVisible={{ border: "2px solid", borderColor: "primary.500" }}/>
                    </Flex>
                </Flex>
                {/* 送出按鈕 */}
                <ButtonL>
                    <Text textStyle="title20" pointerEvents="none">確認送出</Text>
                </ButtonL>
            </Box>
        </Flex>
    )
}