import { Box } from '@chakra-ui/react';

const Banner = props => {
  return (
    <Box
      position="sticky"
      bg="#ffd07c"
      w="100%"
      left="0"
      top="0"
      textAlign="center"
      fontWeight="700"
      zIndex="1000"
      {...props}
    />
  );
};
export default Banner;
