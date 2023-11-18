"use client"
import { Box, Flex, Text, Icon } from "@chakra-ui/react"
// component
import ButtonM from "components/general/ButtonM"

export default function DonationCard ({ level, price, people, icon }) {
    return (
        <Flex w="100%" h="max-content" px={{ base: "sp3", lg: "sp4" }} py="sp3"
              position="relative"
              justify="space-between"
              border="2px solid" borderColor="primary.500" borderRadius="16px"
              cursor="pointer"
              role="group" _hover={{ bgColor: "gray.500" }}>
            {/* 資料 */}
            <Flex direction="column" justify="space-between" gap="sp3"
                  _groupHover={{ color: "primary.300" }}>
                <Box as="p" textStyle="title28">
                    <Text as="span" pr="10px" borderRight="2px solid #000" _groupHover={{ borderColor: "primary.300" }}>{level}</Text>
                    {price === 0 && <Text as="span" ml="10px">自訂贊助金額</Text>}
                    {price > 0 && (
                        <>
                            <Text as="span" textStyle="body16" color="gray.300" mx="10px">NT$</Text>
                            <Text as="span">{price.toLocaleString()}</Text>
                        </>
                    )}
                </Box>
                <ButtonM>
                    <Text textStyle="body16" color="gray.600" pointerEvents="none">{`已有 ${people.toLocaleString()} 人贊助`}</Text>
                </ButtonM>
            </Flex>
            {/* Icon */}
            <Box hideBelow="lg" w="128px" h="128px"
                 position="absolute" top="50%" right="16px" transform="translateY(-50%)"
                 color="gray.200" _groupHover={{ color: "gray.100" }}>
                <Icon as={icon} w="100%" h="100%"/>
            </Box>
        </Flex>
    )
}