import { Box } from '@chakra-ui/react'
import React from 'react'
import './pinnedMenu.css'
import { FaCircleMinus } from "react-icons/fa6";

const Mockroom = ({ roomNum, onClick }) => {
  return (
    <div>
        <Box className='mockRoom' onClick={onClick}>
            {roomNum}
            <FaCircleMinus style={{background: 'transparent', position: 'absolute', top: '5px', right: '5px'}} size={'20%'}/>
        </Box>
      
    </div>
  )
}

export default Mockroom
