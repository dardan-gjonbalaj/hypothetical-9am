import { Box, Image } from '@chakra-ui/react';

const Accolade = props => {
  return (
    <Box p="0" w="30%" h="auto">
      <Image
        fallbackSrc="https://via.placeholder.com/100x55"
        fit="cover"
        width="100%"
        h="auto"
        border="none"
      />
    </Box>
  );
};

export default Accolade;
