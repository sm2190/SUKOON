import React from 'react';
import { LuQrCode } from "react-icons/lu";
import { FaCamera } from "react-icons/fa";
import './QRWait.css';
import { Box, Button, Heading, HStack, Stack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate


const QRWait = () => {

    const navigate = useNavigate();

    const goToAuth = () => {
        navigate('/'); // Navigate to the root Auth page
      };
  return (
    <div>
        <Box className='QRHeader'></Box>
        <Stack className='QRStack'>
            <Box className='QRIconContainer'>
                <LuQrCode className='QRIcon' />
                <Box className='QRHeading'>
                    To get started, please scan your hub's QR code!
                </Box>
                
            </Box>
            <Button className='scanButton'>
                <HStack bg={'transparent'}>
                    <Heading bg={'transparent'}>
                        Scan
                    </Heading>
                    <FaCamera className='QRCamera' />
                </HStack>
            </Button>

            <Heading color={'#6cce58'} fontWeight={'light'} ml={'auto'} mr={'auto'} pt={'2px'} textDecor={'underline'} onClick={goToAuth}> 
                Back to Login
            </Heading>
        </Stack>
    </div>
  );
}

export default QRWait;
