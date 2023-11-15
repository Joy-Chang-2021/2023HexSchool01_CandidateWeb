import { Box } from '@chakra-ui/react';
import Header from 'components/header'
import Main from 'components/main'
import Footer from 'components/footer'

function App() {
  return (
    <div className="App">
      <Box maxW="1280px" mx="auto" px={{ base: "sp3", md: "sp6" }}>
          <Header />
          <Main />
          <Footer />
      </Box>
    </div>
  );
}

export default App;
