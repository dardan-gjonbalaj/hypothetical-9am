import { Box } from '@chakra-ui/react';

const Banner = props => {
  return (
    <Box
      position="fixed"
      bg="#ffd07c"
      w="100%"
      left="0"
      top="0"
      py={4}
      textAlign="center"
      fontWeight="700"
      {...props}
    />
  );
};
export default Banner;
