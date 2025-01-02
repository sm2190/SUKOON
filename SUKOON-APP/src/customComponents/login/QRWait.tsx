import React from 'react';
import { LuQrCode } from "react-icons/lu";
import { FaCamera } from "react-icons/fa";
import './QRWait.css';
import { Box, Button, Heading, HStack, Stack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const QRWait = () => {
  const navigate = useNavigate();

  const goToAuth = () => {
    navigate('/');
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        // Process the file if needed (e.g., use a QR code scanning library)
        console.log("File selected:", file);

        // Example navigation or further processing
        navigate(`/home`);
      } catch (error) {
        console.error("Error processing file:", error);
      }
    }
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
          {/* Hidden input field for opening the native camera */}
          <input
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handleFileChange}
            style={{ position: 'absolute', opacity: 0, width: '100%', height: '100%' }}
          />
        </Button>

        <Heading
          color={'#6cce58'}
          fontWeight={'light'}
          ml={'auto'}
          mr={'auto'}
          pt={'2px'}
          textDecor={'underline'}
          onClick={goToAuth}
        >
          Back to Login
        </Heading>
      </Stack>
    </div>
  );
};

export default QRWait;
