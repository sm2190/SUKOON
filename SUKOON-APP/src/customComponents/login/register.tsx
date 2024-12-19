import { Flex, Heading, Stack } from '@chakra-ui/react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    FormErrorIcon
  } from "@chakra-ui/form-control";
  import React from 'react';
import TopBorderImage from '@/images/pngegg (1).png';

const Register = () => {
  return (
    <div>
      <Flex position={'relative'} display={'flex'} justifyContent="center">
        {/* Image */}
        <img src={TopBorderImage} alt="border image" style={{ width: '100%' }} />
        
        {/* Heading on top of the image */}
        <Heading
          position={'absolute'}
          top={'50%'}  // Centers the heading vertically
          left={'50%'}  // Centers the heading horizontally
          transform={'translate(-50%, 20%)'} // Adjust for exact centering
          color={'black'}
          fontSize={'2xl'} // Adjust the font size as needed
        >
          Sign Up
        </Heading>
      </Flex>

        <Stack>
            <FormControl>
                <FormLabel>
                    Username
                </FormLabel>
            </FormControl>
      </Stack>
    </div>
  )
}

export default Register
