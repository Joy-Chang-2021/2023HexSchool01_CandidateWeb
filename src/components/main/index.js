import { Box, Text } from "@chakra-ui/react"
// component
import Intro from "components/main/Intro.js"


export default function Main () {
    return (
        <Box as="main" mt="80px">
            <Intro />
            <Text textStyle="title48">Text 文字測試</Text>
            <Text textStyle="title28">Text 文字測試</Text>
            <Text textStyle="title24">Text 文字測試</Text>
            <Text textStyle="title20">Text 文字測試</Text>
            <Text textStyle="body16">Text 文字測試</Text>
        </Box>
    )
}