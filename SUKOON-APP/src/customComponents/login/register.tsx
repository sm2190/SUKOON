import { Flex, Heading, Stack, Input, Button, Box } from '@chakra-ui/react';
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

        <Heading className='signUpHeading'>Sign Up</Heading>
      </Flex>

      <Stack className='signUpDataInputStack' spaceY={5}>
      <Box className='OuterInputBox'>
          <Input
            placeholder="Username"
            pl="30px"  
          />

          <Box className='InnerInputBox'>
            <LuUser />
          </Box>
        </Box>

        <Box className='OuterInputBox'>
          <Input
            placeholder="Email"
            pl="30px"  
          />

          <Box className='InnerInputBox'>
            <MdOutlineEmail />
          </Box>
        </Box>

        <Box className='OuterInputBox'>
          <Input
            placeholder="Password"
            pl="30px"  
          />

          <Box className='InnerInputBox'>
            <CiLock />
          </Box>
        </Box>

        <Box className='OuterInputBox'>
          <Input
            placeholder="Confirm Password"
            pl="30px"  
          />

          <Box className='InnerInputBox'>
            <CiLock />
          </Box>
        </Box>

        <Button colorScheme="blue" mt={4}>
          Register
        </Button>
      </Stack>
    </div>
  );
};

export default Register;
