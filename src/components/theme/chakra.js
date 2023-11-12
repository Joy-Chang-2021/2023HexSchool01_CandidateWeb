import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    fontFace: {
        fontFamily: "思源黑體 NotoSansTC",
        src: "url('components/theme/NotoSansTC-VariableFont_wght.ttf') format('truetype')",
        fontWeight: "normal",
        fontStyle: "normal"
    },
    fonts: {
        heading: "'思源黑體 NotoSansTC', sans-serif",
        body: "'思源黑體 NotoSansTC', sans-serif"
    },
    colors: {
        gray: {
            100: "#FFFFFF",
            200: "#E2E2E2",
            300: "#C6C6C6",
            400: "#8C8C8C",
            500: "#444444",
            600: "#000000"
        },
        primary: {
            200: "#FBFFE1",
            300: "#EEFFA9",
            400: "#D1FA31",
            500: "#BBE217",
            600: "#A8C400"
        }
    },
    space: {
        sp1: "4px",
        sp2: "8px",
        sp3: "16px",
        sp4: "32px",
        sp5: "48px",
        sp6: "64px"
    },
    textStyles: {
        title48: {
            fontSize: "48px",
            fontWeight: "700",
            lineHeight: "1.5"
        },
        title28: {
            fontSize: "28px",
            fontWeight: "700",
            lineHeight: "1.5"
        },
        title24: {
            fontSize: "24px",
            fontWeight: "700",
            lineHeight: "1.5"
        },
        title20: {
            fontSize: "20px",
            fontWeight: "500",
            lineHeight: "1.5"
        },
        body16: {
            fontSize: "16px",
            fontWeight: "500",
            lineHeight: "1.75"
        }
    }
})


export default function Chakra ({ children }) {
    return (
        <ChakraProvider theme={theme}>
            { children }
        </ChakraProvider>
    )
}