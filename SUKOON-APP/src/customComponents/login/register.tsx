import { Flex, Heading, Stack, Input, Button, Box, Text, HStack } from '@chakra-ui/react';
import { LuUser } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import TopBorderImage from '@/images/pngegg (1).png';
import './register.css';

const Register = () => {
  return (
    <div style={{ overflowX: 'hidden' }}> {/* Prevent horizontal scrolling */}
      {/* Top Section with Image and Heading */}
      <Flex className='registerTop' overflow="hidden" position="relative" width="100%">
        {/* Image */}
        <img
          src={TopBorderImage}
          alt="border image"
          style={{
            width: '100%',
            height: 'auto',  
            objectFit: 'cover',  
            maxHeight: '100vh',  
          }}
        />

        
      </Flex>

      <Stack className='signUpDataInputStack' spaceY={3}>
        <Flex alignItems="center" width="100%" display={'flex'}>
          {/* Back Button */}
          <Button 
            borderRadius={200} 
            width="30px" 
            height="40px" 
            display={'flex'} 
            bg={'#43eb7f'}
            position="absolute" // Positioning the button absolutely to the left
            left="-15%" // Moves the button more to the left
            boxShadow= '0 4px 8px rgba(0, 0, 0, 0.2)'
          >
            <Text color={'white'}>&lt;</Text>
          </Button>

          {/* Sign Up Heading */}
          <Heading textAlign="center" width="100%" color={'black'}>
            Sign Up
          </Heading>
        </Flex>




        
        <Box className='OuterInputBox'>
            <Input
              placeholder="Username"
              className='InputData'
            />

            <Box className='InnerInputBox'>
              <LuUser />
            </Box>
        </Box>

          <Box className='OuterInputBox'>
            <Input
              placeholder="Email"
              className='InputData'
            />

            <Box className='InnerInputBox'>
              <MdOutlineEmail />
            </Box>
          </Box>

          <Box className='OuterInputBox'>
            <Input
              placeholder="Password"
              className='InputData'
            />

            <Box className='InnerInputBox'>
              <CiLock />
            </Box>
          </Box>

          <Box className='OuterInputBox'>
            <Input
              placeholder="Confirm Password"
              className='InputData'
            />

            <Box className='InnerInputBox'>
              <CiLock />
            </Box>
          </Box>

          <Button className='next-Button' backgroundColor={'#6cce58'} color={'#f6f6f6'}>
            Next
          </Button>

          <Text className='registeryText'>
              By continuing, you agree to the <span style={{color: "#6cce58"}}>Terms of Service </span> 
              and <span style={{color: "#6cce58"}}> Privacy Policy</span>
          </Text>

          <HStack>
            <Box className='regBox'>

            </Box>

            <Text color={'black'}>
              or
            </Text>

            <Box className='regBox'>

            </Box>
          </HStack>

          <div className="buttons-container">
            <div className="apple-login-button">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" className="apple-icon" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7zm-105.1-305c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z"></path>
              </svg>
              <span>Continue with Apple</span>
            </div>
            <div className="google-login-button">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" x="0px" y="0px" className="google-icon" viewBox="0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
                  c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
                  c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
                  C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
                  c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
                  c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
              </svg>
              <span>Continue with Google</span>
            </div>
          </div>

      </Stack>
    </div>
  );
};

export default Register;
