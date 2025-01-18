import { Box, Heading, HStack, Stack } from '@chakra-ui/react'
import React from 'react'
import './Homepage.css'
import { MdArrowDropDown } from "react-icons/md";
import Dropdown from './Dropdown.tsx'


const Homepage = () => {
  const username = sessionStorage.getItem('username');

  return (
    <div>
      <Stack className='homepageContainer'>
        <Box className='homepageHeader'>
          <Heading bg={'transparent'} ml={'10px'} fontWeight={'bold'}>
            Ya Halla, {username || 'guest'}
          </Heading>
        </Box>

        {/* Ensure items are centered */}
        <HStack align="center" ml="10px">
          <Heading color={'#454545'} bg={'transparent'}>
            Homes:
          </Heading>

          <Dropdown></Dropdown>

          
        </HStack>
      </Stack>
    </div>
  )
}

export default Homepage
