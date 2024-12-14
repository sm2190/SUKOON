import { Heading } from '@chakra-ui/react'
import React from 'react'
import BackgroundImageWhite from '@/images/Screenshot 2024-12-14 214554.png'

const login = () => {
  return (
    <div 
      style={{
        backgroundImage: `url(${BackgroundImageWhite})`, // Set background image
        backgroundRepeat: 'repeat', // Repeat the image
        backgroundPosition: 'top left', // Start repeating from the top-left corner
        height: '100vh', // Make the div fill the entire viewport height
      }}
    >
      <Heading color={'black'}>
        Hello
      </Heading>
    </div>
  )
}

export default login;
