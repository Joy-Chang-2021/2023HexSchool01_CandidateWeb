import { Box } from '@chakra-ui/react';
import Header from 'components/header'
import Main from 'components/main'
import Footer from 'components/footer'

function App() {
  return (
    <Box className="App" overflowX="hidden">
      <Header />
      <Box maxW={{ base: "576px", lg: "1280px"}} mx="auto"
           px={{ base: "sp3", lg: "sp6" }}>
          <Main />
          <Footer />
      </Box>
    </Box>
  );
}

export default App;
