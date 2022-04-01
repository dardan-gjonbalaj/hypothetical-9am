import { Button as ChakraButton } from '@chakra-ui/react';

const Button = props => {
  return (
    <ChakraButton
      bg="#ffd07c"
      borderRadius="0"
      padding="min(1rem, 3.8vw) min(2.2rem, 4vw)"
      height="12"
      fontWeight="600"
      {...props}
    />
  );
};
export default Button;
