import { Box } from "@chakra-ui/react"

export default function ButtonS ({ children, color }) {

    return (
        <Box as="button" w="max-content"
             color={color || "gray.600"} _hover={{ color: "primary.500" }}>
            {children}
        </Box>
    )
}