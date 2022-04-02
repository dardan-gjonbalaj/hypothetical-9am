import { Flex, Box, Image, Text } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
const Info = props => {
  const [toggle, setToggle] = useState(props.side);
  const handleToggle = () => {
    toggle === '' ? setToggle('') : setToggle(props.side);
  };

  return (
    <Flex flexDirection={['column', null, props.side]} display="flex">
      <Image
        fallbackSrc="https://via.placeholder.com/400x200"
        fit="cover"
        width="100%"
        h="auto"
        pb={[3, null, 0]}
        pl={[0, null, props.side === 'row-reverse' ? 5 : 0]}
        pr={[0, null, props.side === 'row' ? 5 : 0]}
      />

      <Flex flexDirection="row">
        <Box w="20%" paddingRight="4" flex="1 1">
          <Text bg="white" color="#8dd9cd" fontSize="5xl" fontWeight={700}>
            {props.num}
          </Text>
        </Box>

        <Box>
          <Text fontSize="xl" fontWeight="700">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Text>
          <Text fontSize="md" fontWeight="400">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};
export default Info;
