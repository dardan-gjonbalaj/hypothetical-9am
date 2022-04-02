import { Flex, Box, Container, Text, Image } from '@chakra-ui/react';

const Panel = () => {
  return (
    <Flex
      display="flex"
      flexDirection={['column', 'row']}
      flexWrap="wrap"
      w="100%"
      bg="#8dd9cd"
      py="2"
      maxW="container.xl"
    >
      <Box w="100%" h="auto" bg="white">
        <Text fontSize="lg" fontWeight="700" letterSpacing="wider">
          Lorem Ipsum
        </Text>
        <Flex>
          <Image
            srcSet="https://via.placeholder.com/100x100"
            fallbackSrc="https://via.placeholder.com/100x100"
            objectFit="scale-down"
          />
          <Box p={2}>
            <Text fontSize="md">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </Text>
            <Text fontSize="md" my="2" fontWeight="600" color="#71aea4">
              "$50 off Yearly Subscription"
            </Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};
export default Panel;
