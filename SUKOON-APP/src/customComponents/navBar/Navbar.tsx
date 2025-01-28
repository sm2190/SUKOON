import { Box, Heading, HStack, Stack } from "@chakra-ui/react";
import './Navbar.css'
import { FaHome } from "react-icons/fa";
import { GiCircleForest } from "react-icons/gi";
import { SlGraph } from "react-icons/sl";
import { MdAccountCircle } from "react-icons/md";
import { BsDoorClosed } from "react-icons/bs";

const Navbar = () => {
  return (
    <Box
      position="fixed"  // Keeps it fixed on the screen
      bottom="-4"        // Moves it to the bottom
      width="100%"
      bg="white"     // Temporary color for visibility
      color="white"
      p="4"
      className="navContainer"
      
    >
        <HStack bg={'transparent'} display={'flex'} justifyContent={'center'} alignItems={'center'} alignContent={'center'} spaceX={'5%'} mb={2}>
            <Stack spaceY={-3} display={'flex'} justifyContent={'center'} alignItems={'center'} alignContent={'center'}>
                <FaHome size={'50%'} style={{background: 'transparent'}} color="#21334a"/>
                <Heading color="#21334a" fontSize={'70%'} bg={'transparent'} textAlign={'center'}>
                    Home
                </Heading>
            
            </Stack>

            <Stack spaceY={-3} display={'flex'} justifyContent={'center'} alignItems={'center'} alignContent={'center'}>
                <BsDoorClosed size={'50%'} style={{background: 'transparent'}} color="#21334a"/>
                <Heading color="#21334a" fontSize={'70%'} bg={'transparent'} textAlign={'center'}>
                    Rooms
                </Heading>

            </Stack>
            
            <Stack spaceY={-3} display={'flex'} justifyContent={'center'} alignItems={'center'} alignContent={'center'}>
                <GiCircleForest size={'50%'} style={{background: 'transparent'}} color="#21334a"/>
                <Heading color="#21334a" fontSize={'70%'} bg={'transparent'} textAlign={'center'}>
                    Be'ati
                </Heading>
            </Stack>

            <Stack spaceY={-3} display={'flex'} justifyContent={'center'} alignItems={'center'} alignContent={'center'}>
                <SlGraph size={'50%'} style={{background: 'transparent'}} color="#21334a"/>
                <Heading color="#21334a" fontSize={'70%'} bg={'transparent'} textAlign={'center'}>
                    Stats
                </Heading>
            </Stack>

            <Stack spaceY={-3} display={'flex'} justifyContent={'center'} alignItems={'center'} alignContent={'center'}>
                <MdAccountCircle size={'50%'} style={{background: 'transparent'}} color="#21334a"/>
                <Heading color="#21334a" fontSize={'70%'} bg={'transparent'} textAlign={'center'}>
                    Account
                </Heading>

            </Stack>
            
            
        </HStack>
    </Box>
  );
};

export default Navbar;
