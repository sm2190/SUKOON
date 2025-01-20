import { Box, Flex, Heading, HStack, Stack } from '@chakra-ui/react'
import React from 'react'
import './pinnedMenu.css'
import Dropdown from './Dropdown'
import { VscClose } from "react-icons/vsc";


const pinnedMenu = () => {

  return (
    <div style={{overflow: 'hidden'}}>

        <Flex position="absolute" width="100vw" height="100vh" justifyContent="center" alignItems="center" zIndex={10} display={'flex'}>
            <Box 
                bg="#E4E4E7" 
                width="95%" 
                height="50vh" 
                borderColor="#21334a" 
                borderRadius={20} 
                borderWidth={2} 
                position="absolute" 
                left="50%" 
                transform="translate(-50%, -180%)"
                
                zIndex={10}
            >
                <Stack bg={'transparent'} className='editStack' spaceY={'20px'}>
                    
                    <HStack bg={'transparent'} spaceX={'55%'}>
                        <Heading className='addPinnedItem'>
                            Pin Item
                            
                        </Heading>
                        
                        <Box bg={'transparent'}>
                            <VscClose color='#21334a' style={{background: 'transparent'}}/>
                        </Box>
                       

                    </HStack>
                    


                    <Stack bg={'transparent'}>

                        <HStack bg={'transparent'}>

                            <Heading bg={'transparent'} className='pinType'>
                                Pin type:
                            </Heading>

                            <Dropdown initialShow='Choose Pin Type...'/>
                            
                        </HStack>

                    </Stack>

                    <Box
                    bg={'white'}
                    width="95%" 
                    height="30vh" 
                    borderColor="#21334a" 
                    borderRadius={20} 
                    borderWidth={2} 
                    position="absolute" 
                    top="60%" 
                    left="50%" 
                    transform="translate(-50%, -50%)"
                    overflow={'hidden'}
                    
                    >
                        <Box width={'100%'} height={'100%'} overflow={'scroll'}>

                            <Flex wrap="wrap" justify="start">
                                <Box className='mockRoom' />
                                <Box className='mockRoom' />
                                <Box className='mockRoom' />
                                <Box className='mockRoom' />
                            </Flex>

                        </Box>

                        

                        

                    </Box>
                    
                </Stack>

            </Box>
        </Flex>

      
    </div>
  )
}

export default pinnedMenu
