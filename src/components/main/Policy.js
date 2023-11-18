"use client"
import { Box, Text } from "@chakra-ui/react"
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