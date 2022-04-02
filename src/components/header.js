import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Button,
  useDisclosure,
  Container,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const Header = props => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <Container maxW="container.xl" w="100%" p="0">
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding={6}
        bg="#8dd9cd"
        color="black"
        w="100%"
        left="0"
        top={[0, null, '21px']}
        position={['relative', null, 'fixed']}
        zIndex="100"
        {...props}
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            Chakra UI
          </Heading>
        </Flex>

        <Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
          <HamburgerIcon />
        </Box>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <Text>Docs</Text>
          <Text>Examples</Text>
          <Text>Blog</Text>
        </Stack>

        <Box
          display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
          mt={{ base: 4, md: 0 }}
        >
          <Button
            variant="outline"
            _hover={{ bg: 'teal.700', borderColor: 'teal.700' }}
          >
            Create account
          </Button>
        </Box>
      </Flex>
    </Container>
  );
};
export default Header;
