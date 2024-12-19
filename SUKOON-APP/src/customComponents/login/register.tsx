import { Flex, Heading, Stack, Input, Button } from '@chakra-ui/react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/form-control';
import React from 'react';
import TopBorderImage from '@/images/pngegg (1).png';

const Register = () => {
  return (
    <div>
      {/* Top Section with Image and Heading */}
      <Flex position={'relative'} display={'flex'} justifyContent="center">
        {/* Image */}
        <img src={TopBorderImage} alt="border image" style={{ width: '100%' }} />
        
        {/* Heading on top of the image */}
        <Heading
          position={'absolute'}
          top={'50%'} // Centers the heading vertically
          left={'50%'} // Centers the heading horizontally
          transform={'translate(-50%, -50%)'} // Adjust for exact centering
          color={'black'}
          fontSize={'2xl'} // Adjust the font size as needed
        >
          Sign Up
        </Heading>
      </Flex>

      {/* Form Section */}
      <Stack spacing={4} p={4}>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Enter your email" />
        </FormControl>

        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input type="text" placeholder="Enter your username" />
        </FormControl>

        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Enter your password" />
        </FormControl>

        {/* Submit Button */}
        <Button colorScheme="blue" mt={4}>
          Register
        </Button>
      </Stack>
    </div>
  );
};

export default Register;
