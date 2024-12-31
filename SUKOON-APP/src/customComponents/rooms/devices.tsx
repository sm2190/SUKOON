import { useState } from 'react';
import { Box, Grid, GridItem, Text, VStack, HStack, Image, Center } from '@chakra-ui/react';

import ToggleButton from './toggleButton';
import AddDeviceButton from './addDeviceButton';

// Import device images (Icons)
import LightImg from '@/images/devicesIcons/lamp.png';
import TvImg from '@/images/devicesIcons/tv.png';
import FireImg from '@/images/devicesIcons/fireplace.png';
import AcImg from '@/images/devicesIcons/ac.png';
import ConsoleImg from '@/images/devicesIcons/console.png';
import FanImg from '@/images/devicesIcons/fan.png';

const Devices = () => {
  const initialDevices = [
    { id: 1, name: 'Light', isOn: false, image: LightImg },
    { id: 2, name: 'TV', isOn: false, image: TvImg },
    { id: 3, name: 'Fireplace', isOn: false, image: FireImg },
    { id: 4, name: 'AC', isOn: false, image: AcImg },
    { id: 5, name: 'Console', isOn: false, image: ConsoleImg },
    { id: 6, name: 'Fan', isOn: false, image: FanImg },
  ];

  const [devices, setDevices] = useState(initialDevices);

  const toggleDevice = (id: number) => {
    setDevices((prevDevices) =>
      prevDevices.map((device) =>
        device.id === id ? { ...device, isOn: !device.isOn } : device
      )
    );
  };

  return (
    <Box p={5} bg="linear-gradient(135deg, #d3f4e2, #b6e6c3)" minH="100vh">
      {/* Room Name */}
      <Text fontSize="4xl" fontWeight="bold" mb={10} color="black" textAlign="center">
        Living Room
      </Text>

      {/* Devices Grid */}
      <Grid templateColumns="repeat(2, 1fr)" gap={10} maxW="1200px">
        {devices.map((device) => (
          <GridItem key={device.id}>
            <VStack
              align="center"
              p={5}
              bg="rgba(245, 245, 245, 0.4)" // Lighter transparency for the card background
              borderRadius="lg" // Rounded corners
              boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)" // Subtle shadow for depth
              transition="all 0.3s ease"
              _hover={{
                transform: 'scale(1.05)', // Slight scale effect for interactivity
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)', // Stronger shadow on hover
              }}
            >
              {/* HStack for image and toggle button */}
              <HStack align="center" justify="space-between" w="full">
                <Image
                  src={device.image}
                  alt={device.name}
                  boxSize="60px"
                  borderRadius="md"
                  bg={device.isOn ? 'green.200' : 'gray.200'}
                  border={device.isOn ? '4px solid rgba(0, 255, 0, 0.6)' : 'none'}
                  boxShadow={device.isOn ? '0 0 15px rgba(0, 255, 0, 0.6)' : 'none'}
                  transition="all 0.3s ease-in-out"
                />
                <Box ml={2}>
                  <ToggleButton isOn={device.isOn} onToggle={() => toggleDevice(device.id)} />
                </Box>
              </HStack>

              {/* Device Name */}
              <Text fontSize="md" fontWeight="semibold" color="black" mt={2} textAlign="center">
                {device.name}
              </Text>
            </VStack>
          </GridItem>
        ))}

        {/* Add New Device Button */}
        <GridItem colSpan={2}>
          <Center>
            <AddDeviceButton />
          </Center>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Devices;





