import { Box, Text } from "@chakra-ui/react"
// component
import Candidate from "components/main/Candidate.js"
import Latest from "components/main/Latest.js"

export default function Main () {
    return (
        <Box as="main" mt="80px">
            <Candidate />
            {/* 候選主張 + 最新活動 */}
            <Latest />
            {/* 政策議題 */}

            {/* 小額捐款 */}

            {/* 服務信箱 */}

            <Text textStyle="title48">Text 文字測試</Text>
            <Text textStyle="title28">Text 文字測試</Text>
            <Text textStyle="title24">Text 文字測試</Text>
            <Text textStyle="title20">Text 文字測試</Text>
            <Text textStyle="body16">Text 文字測試</Text>
        </Box>
    )
}