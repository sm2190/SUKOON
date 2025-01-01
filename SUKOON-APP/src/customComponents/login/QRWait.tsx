import React, { useState } from 'react';
import { LuQrCode } from "react-icons/lu";
import { FaCamera } from "react-icons/fa";
import './QRWait.css';
import { Box, Button, Heading, HStack, Stack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Scanner } from '@yudiel/react-qr-scanner'; // QR scanner import

const QRWait = () => {
  const [isCameraOpen, setIsCameraOpen] = useState(false); 
  const [scannedCode, setScannedCode] = useState<string | null>(null); // To store the scanned QR code
  const [videoStream, setVideoStream] = useState<MediaStream | null>(null); 

  const navigate = useNavigate();

  const goToAuth = () => {
    navigate('/'); 
  };

  const openCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      setVideoStream(stream);
      setIsCameraOpen(true);
    } catch (err) {
      console.error("Error accessing camera:", err);
    }
  };

  const stopCamera = () => {
    if (videoStream) {
      videoStream.getTracks().forEach((track) => track.stop());
      setIsCameraOpen(false);
      setVideoStream(null);
    }
  };

  const handleScan = (data: string | null) => {
    if (data) {
      setScannedCode(data);
      // Do something with the scanned QR code, e.g., navigate or process the code
      console.log('Scanned QR Code:', data);
      navigate(`/home`); // Example: navigate to a page with the QR code data
    }
  };

  const handleError = (err: any) => {
    console.error("Error scanning QR code:", err);
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

        <Button 
          className='scanButton'
          onClick={() => {
            if (isCameraOpen) {
              stopCamera();
            } else {
              openCamera(); 
            }
          }}
        >
          <HStack bg={'transparent'}>
            <Heading bg={'transparent'}>
              {isCameraOpen ? 'Stop Scan' : 'Start Scan'}
            </Heading>
            <FaCamera className='QRCamera' />
          </HStack>
        </Button>

        {/* Render the QR scanner if the camera is open */}
        {isCameraOpen && (
          <Box className="qrScannerContainer">
            <Scanner
              delay={300} // Optional: delay between scans (in ms)
              style={{ width: '100%' }} // Full width for mobile
              onScan={handleScan}
              onError={handleError}
            />
          </Box>
        )}

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
