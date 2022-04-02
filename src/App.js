import {
  ChakraProvider,
  theme,
  Container,
  SimpleGrid,
  Text,
  Image,
  Box,
  VStack,
  Flex,
} from '@chakra-ui/react';
import { QuestionIcon, AddIcon } from '@chakra-ui/icons';
//import theme from './components/theme';
import Button from './components/button';
import Banner from './components/banner';
import Card from './components/card';
import Header from './components/header';
import Info from './components/info';
import Accolade from './components/accolade';
import Panel from './components/panel';
import Slideshow from './components/slideshow';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Banner>
        <Text fontSize={'sm'} fontFamily={('Raleway', 'sans - serif')}>
          Intro Offer: $0 Virtual Medical Care + $5 Meds
        </Text>
      </Banner>
      <Header />
      <Container maxW="100%" pb={20} pt={[0, null, '88px']} bg="#8dd9cd">
        <Button>Hello World</Button>
        <span>Hello World</span>

        <SimpleGrid
          bg="#8dd9cd"
          columns={[2, 3, 4]}
          py={20}
          spacingX={4}
          spacingY={4}
        >
          <Card
            icon={QuestionIcon}
            title="Lorem ipsum"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Card
            icon={QuestionIcon}
            title="Lorem ipsum"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Card
            icon={QuestionIcon}
            title="Lorem ipsum"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Card
            icon={QuestionIcon}
            title="Lorem ipsum"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </SimpleGrid>
      </Container>

      <Container bg="white">
        <Text fontSize="2xl" fontWeight={800} textAlign="center" m={8}>
          The Quick Brown Fox
        </Text>
      </Container>
      {/* info cards */}
      <VStack spacing={[8, null, 24]}>
        <Info num={'1'} side={'row-reverse'} />
        <Info num={'2'} side={'row'} />
        <Info num={'3'} side={'row-reverse'} />
        <Info num={'4'} side={'row'} />
      </VStack>
      <Container maxW="container.xl" bg="#e8f7f5">
        <Container
          display="flex"
          flexDirection={'row'}
          h="auto"
          w="100%"
          justifyContent="center"
          alignItems="center"
          flexWrap={['wrap', 'nowrap']}
          py="8"
          gap="10px"
        >
          <Accolade />
          <Accolade />
          <Accolade />
          <Accolade />
          <Accolade />
        </Container>
      </Container>
      {/* Header 2 */}
      <Container maxW="container.xl" bg="#8dd9cd" py="2">
        <Box py="4">
          <Text fontSize="2xl" fontWeight={700} textAlign="center">
            Jumped Over The Lazy Dog
          </Text>
          <Text fontSize="l" fontWeight="700" textAlign="center">
            Because it is agile.
          </Text>
        </Box>

        <Container maxW="container.xl" px="0" py="2" bg="#8dd9cd">
          <Text
            fontSize="xl"
            fontWeight="700"
            color="#611315"
            letterSpacing="wider"
            textAlign="inherit"
          >
            Base-Plan
          </Text>
        </Container>
        <Flex flexDirection={['column', null, 'row']} pb="8">
          <Panel />
          {/* Icon */}
          <Flex
            display="flex"
            py="2"
            justifyContent="center"
            alignItems="center"
            bg="#8dd9cd"
          >
            <Container bg="#8dd9cd" py="2" maxW="container.xl">
              <AddIcon boxSize="8" color="#611315" />
            </Container>
          </Flex>
          <Panel />
        </Flex>

        <Container maxW="container.xl" px="0" py="2">
          <Text
            fontSize="xl"
            fontWeight="700"
            color="#611315"
            letterSpacing="wider"
            textAlign="inherit"
          >
            Add-ons
          </Text>
        </Container>
        <Flex
          spacingX="4"
          gap="3"
          flexDirection={['column-reverse', null, 'row']}
        >
          <Panel />
          <Panel />
          <Panel />
        </Flex>
      </Container>
      <Container maxW="container.xl" bg="#8dd9cd" py="2">
        <Slideshow />
      </Container>
    </ChakraProvider>
  );
}

export default App;
