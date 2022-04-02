import {
  Box,
  Flex,
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
  Image,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <Flex
        py="2"
        flexDirection={['column', null, 'row']}
        flexWrap="wrap"
        textAlign="center"
      >
        <Box fontSize="2xl" fontWeight="500" borderBottom="2px" py="2" px="4">
          Company
        </Box>
        <Box fontSize="2xl" fontWeight="500" borderBottom="2px" py="2">
          Career
        </Box>
      </Flex>
      <Container as="footer" role="contentinfo" py={{ base: '8', md: '12' }}>
        <Stack spacing={{ base: '4', md: '5' }}>
          <Stack justify="space-evenly" direction="row" align="center">
            <ButtonGroup variant="ghost">
              <IconButton
                as="a"
                href="#"
                aria-label="LinkedIn"
                icon={<FaLinkedin fontSize="3rem" />}
              />
              <IconButton
                as="a"
                href="#"
                aria-label="GitHub"
                icon={<FaGithub fontSize="3rem" />}
              />
              <IconButton
                as="a"
                href="#"
                aria-label="Twitter"
                icon={<FaTwitter fontSize="3rem" />}
              />
            </ButtonGroup>
          </Stack>
          <Text fontSize="sm" color="subtle">
            &copy; {new Date().getFullYear()} Chakra UI Pro, Inc. All rights
            reserved.
          </Text>
        </Stack>
      </Container>
    </>
  );
};
export default Footer;
