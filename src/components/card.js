// import { Stack, HStack, VStack,Box } from '@chakra-ui/react';
import { Box, Text } from '@chakra-ui/react';

const Card = props => {
  return (
    <Box pt="40px" position="relative">
      <Box
        display="flex"
        borderRadius="50%"
        bg="white"
        h="80px"
        w="80px"
        alignItems="center"
        position="absolute"
        top="0"
        left="50%"
        transform="translateX(-50%)"
      >
        <props.icon w="48px" h="48px" margin="auto" />
      </Box>

      <Box display="flex" alignItems="center" h="32" pt="40px" bg="#e8f7f5">
        <Text margin="auto" fontSize="xl" textAlign="center">
          {props.title}
        </Text>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        bg="aqua"
        py="5"
        px="3"
        bg="white"
      >
        <Text margin="auto" fontSize="md" textAlign="center" p="2">
          {props.body}
        </Text>
      </Box>
    </Box>
  );
};
export default Card;
