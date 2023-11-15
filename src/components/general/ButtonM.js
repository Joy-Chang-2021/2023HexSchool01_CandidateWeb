import { Box } from "@chakra-ui/react"

export default function ButtonM ({ children }) {
    return (
        <Box as="button"
              w="max-content"
              px="sp3" py="sp2"
              borderRadius="48px"
              bgColor="primary.300"
              _hover={{ bgColor: "primary.400" }}>
            {children}
        </Box>
    )
}