import { Box, Heading, HStack, Stack } from '@chakra-ui/react'
import React from 'react'
import './Homepage.css'
import { For, createListCollection } from "@chakra-ui/react"
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select"


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


        <HStack>
          <Heading color={'#454545'} bg={'transparent'} ml={'10px'}>
            Homes: 
          </Heading>

          <Stack gap="5" width='30%'>
            <SelectRoot collection={frameworks}>
              <SelectLabel>size = </SelectLabel>
              <SelectTrigger>
                <SelectValueText placeholder="Select Home" />
              </SelectTrigger>
              <SelectContent>
                {frameworks.items.map((movie) => (
                  <SelectItem item={movie} key={movie.value}>
                    {movie.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </SelectRoot>
          </Stack>
        </HStack>

      </Stack>
      
    </div>
  )
}

const frameworks = createListCollection({
  items: [
    { label: "React.js", value: "react" },
    { label: "Vue.js", value: "vue" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
  ],
})

export default Homepage
