import { Box } from "@chakra-ui/react"
// component
import Candidate from "components/main/Candidate.js"
import Latest from "components/main/Latest.js"
import Policy from "components/main/Policy.js"
import Donation from "components/main/Donation.js"
import ServiceMail from "components/main/ServiceMail.js"

export default function Main () {
    return (
        <Box as="main" mt="80px">
            <Candidate />
            {/* 候選主張 + 最新活動 */}
            <Latest />
            {/* 政策議題 */}
            <Policy />
            {/* 小額捐款 */}
            <Donation />
            {/* 服務信箱 */}
            <ServiceMail />
        </Box>
    )
}