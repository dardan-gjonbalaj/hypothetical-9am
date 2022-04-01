import { ChakraProvider, theme, Container, SimpleGrid } from '@chakra-ui/react';
import { QuestionIcon } from '@chakra-ui/icons';

import Button from './components/button';
import Banner from './components/banner';
import Card from './components/card';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container pt={20} pb={20} bg="#8dd9cd">
        <Banner>Intro Offer: $0 Virtual Medical Care + $5 Meds</Banner>
        <Button>Hello World</Button>
        <SimpleGrid columns={2} spacingX={2} spacingY={4}>
          <Card
            icon={QuestionIcon}
            title="Virtual Medical Care"
            body="A whole team of specialists available on your schedule."
          />
          <Card
            icon={QuestionIcon}
            title="Virtual Medical Care"
            body="A whole team of specialists available on your schedule."
          />
          <Card
            icon={QuestionIcon}
            title="Virtual Medical Care"
            body="A whole team of specialists available on your schedule."
          />
          <Card
            icon={QuestionIcon}
            title="Virtual Medical Care"
            body="A whole team of specialists available on your schedule."
          />
        </SimpleGrid>
      </Container>

      <Container bg="white"></Container>
    </ChakraProvider>
  );
}

export default App;
