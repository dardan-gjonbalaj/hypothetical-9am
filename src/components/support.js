import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Box,
  Button,
  Flex,
} from '@chakra-ui/react';

const Support = () => {
  return (
    <Box>
      <FormControl>
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Flex flexWrap={['wrap', 'nowrap']} justifyContent={['center', 'none']}>
          <Input id="email" type="email" bg="white" w={['100%', '75%']} />
          <Button bg="#ffd07c">Sign Up Here</Button>
        </Flex>
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
    </Box>
  );
};
export default Support;
