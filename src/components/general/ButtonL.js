import { Box } from "@chakra-ui/react"

export default function ButtonL ({ children }) {
    return (
        <Box as="button"
              display="block" w="100%"
              px="sp4" py="sp3"
              borderRadius="16px"
              bgColor="primary.300"
              _hover={{ bgColor: "primary.400" }}>
            {children}
        </Box>
    )
}