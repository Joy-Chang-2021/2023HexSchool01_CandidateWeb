"use client"
import { Box, Image, Icon, Flex, Center, Text } from "@chakra-ui/react"
// component
import ButtonS from "components/general/ButtonS"
// icon + image
import { IconFacebook, IconInstagram, IconYoutube, MapPin, Phone, Envelope } from "assets/icons"
import { LogoPrimary } from "assets/images"

export default function Footer () {
    return (
        <Flex as="footer" h={{ lg: "280px" }}
             direction="column" justify={{ lg: "space-between" }}
             px={{ base: "sp3", lg: "sp6" }} py="sp4"
             color="gray.100" bgColor="gray.600">
            <Flex direction={{ base: "column", lg: "row" }} justify={{ lg: "space-between" }}>
                {/* Logo */}
                <Box>
                    <Image src={LogoPrimary} w="161px"/>
                    <Flex hideFrom="lg" my="sp3" gap="sp3">
                        <Center as="button">
                            <Icon as={IconFacebook} w="sp4" h="sp4" color="#FFF" _hover={{ color: "primary.300" }}/>
                        </Center>
                        <Center as="button">
                            <Icon as={IconInstagram} w="sp4" h="sp4" color="#FFF" _hover={{ color: "primary.300" }}/>
                        </Center>
                        <Center as="button">
                            <Icon as={IconYoutube} w="sp4" h="sp4" color="#FFF" _hover={{ color: "primary.300" }}/>
                        </Center>
                    </Flex>
                </Box>
                {/* Info */}
                <Flex direction={{ base: "column", lg: "row" }} gap="sp4">
                    <Box>
                        <Text mb={{ base: "sp2", lg: "sp3" }} color="primary.300" fontWeight="500" lineHeight="28px">快速連結</Text>
                        <Flex direction={{ base: "row", lg: "column" }} gap={{ base: "sp3", lg: "sp1" }} textStyle="body16">
                            <ButtonS color="gray.100">首頁</ButtonS>
                            <ButtonS color="gray.100">最新活動</ButtonS>
                            <ButtonS color="gray.100">政策議題</ButtonS>
                            <ButtonS color="gray.100">小額捐款</ButtonS>
                        </Flex>
                    </Box>
                    <Box>
                        <Text mb={{ base: "sp2", lg: "sp3" }} color="primary.300" fontWeight="500" lineHeight="28px">與我們聯繫</Text>
                        <Box>
                            <Flex align="center" gap="sp1">
                                <Icon as={MapPin} w="16px" h="16px" color="primary.300"/>
                                <Text>新星區閃耀大道88號  喵喵大樓3樓</Text>
                            </Flex>
                            <Flex align="center" gap="sp1">
                                <Icon as={Phone} w="16px" h="16px" color="primary.300"/>
                                <Text>(02) 888-5678</Text>
                            </Flex>
                            <Flex align="center" gap="sp1">
                                <Icon as={Envelope} w="16px" h="16px" color="primary.300"/>
                                <Text>supernova.black@gmail.com</Text>
                            </Flex>
                        </Box>
                    </Box>
                </Flex>
            </Flex>
            <Center mt={{ base: "sp4", lg: "0" }}>
                <Text fontSize="14px" fontWeight="400" lineHeight="24px">© 2023 黑新星 Supernova Black 版權所有。</Text>
            </Center>
        </Flex>
    )
}