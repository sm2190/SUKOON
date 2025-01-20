import { Box, Flex, Heading, HStack, Stack } from '@chakra-ui/react'
import React from 'react'
import './Homepage.css'
import { MdArrowDropDown } from "react-icons/md";
import Dropdown from './Dropdown.tsx'
import MiniDisplays from './miniDisplays.tsx';
import { FcTwoSmartphones } from "react-icons/fc";
import { FcPositiveDynamic } from "react-icons/fc";
import { FcChargeBattery } from "react-icons/fc";
import Lottie from 'react-lottie-player';
import PulseAnimation from '@/images/animatedIcons/Animation - 1737092091343.json'


const Homepage = () => {
  const username = sessionStorage.getItem('username');

  return (
    <div>
      <Stack className='homepageContainer'>
        <Box className='homepageHeader'>
          <Heading bg={'transparent'} ml={'20px'} mt={'20px'} fontWeight={'extrabold'} className='introHomepage'>
            Ya Halla, <span className='guestIntro'>{username || 'guest'}</span>
          </Heading>
        </Box>

        {/* Ensure items are centered */}
        <HStack align="center" ml="20px" mt={'10px'} zIndex={1}>
          <Heading color={'#454545'} bg={'transparent'}>
            Homes:
          </Heading>

          <Dropdown></Dropdown>

          
        </HStack>

        <Flex display={'flex'} justifyContent={'center'} alignItems={'center'} alignContent={'center'} mt={'40px'} zIndex={1} bg={'transparent'}>
          <HStack spaceX={-5} justifyContent={'center'} alignItems={'center'} alignContent={'center'}>
            <MiniDisplays Icon={FcTwoSmartphones} title="Active devices:" value="8"></MiniDisplays>
            <MiniDisplays Icon={FcPositiveDynamic} title="Home Status:" value="Good"></MiniDisplays>
            <MiniDisplays Icon={FcChargeBattery} title="Energy Generation:" value="50KW/h"></MiniDisplays>
          </HStack>
        </Flex>

        <Flex className='pulseBoxContainer'>
          <Lottie
          loop
          animationData={PulseAnimation}
          play
          className='pulseAnimation'
          >

          </Lottie>
          <Box className='pulseBox'>
            <Heading bg={'transparent'} fontWeight={'bold'} className='totalConsShow'>
              50.1KW/h
            </Heading>

          </Box>
          
        </Flex>
        <Flex zIndex={2} display={'flex'} alignItems={'center'} justifyContent={'center'}>
          <Heading color={'#05FF02'} textDecor={'underline'}>
            Total Consumption
          </Heading>

        </Flex>

        <HStack height={'50vw'}>
          <Heading color={'#21334a'} fontSize={'120%'}>
            Pinned
          </Heading>

          
        </HStack>
        
      </Stack>
    </div>
  )
}

export default Homepage
