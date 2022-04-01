import { Box, Container, Image, Text } from '@chakra-ui/react';

const Info = props => {
  return (
    <Container display="flex" py={4}>
      <Box w="20%" paddingRight="4" flex="1 1">
        <Text bg="white" color="#8dd9cd" fontSize="5xl" fontWeight={700}>
          {props.num}
        </Text>
      </Box>
      <Box>
        <Text fontSize="xl" fontWeight="700">
          Fill out the online form and check in with our doctors
        </Text>
        <Text fontSize="md" fontWeight="400">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </Box>
    </Container>
  );
};
export default Info;
