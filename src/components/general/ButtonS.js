import { Box } from "@chakra-ui/react"

export default function ButtonS ({ children }) {

    return (
        <Box as="button" w="max-content" _hover={{ color: "primary.500" }}>{children}</Box>
    )
}