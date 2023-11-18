"use client"
import { Box, Image, Icon, Flex, Text } from "@chakra-ui/react"
import styled from "styled-components"
// component
import PolicyPanel from "components/general/PolicyPanel"

export default function Policy () {
    return (
        <Box my={{ base: "sp4", lg: "sp6" }}>
            <Box color="primary.500" mb="sp4">
                <Text textStyle="title48">政策議題</Text>
                <Text textStyle="title20">Policy Issues</Text>
            </Box>
            <PolicyPanel />
        </Box>
    )
}