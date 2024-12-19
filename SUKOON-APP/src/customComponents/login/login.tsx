import { Button, Heading, Stack, Text } from '@chakra-ui/react'
import './login.css'
import LoginAnimation from '@/images/animatedIcons/Forest-Waterfall.mp4'

const login = () => {
  return (
    <div>

      <Stack className='loginStartStack'>
        <video className='loginAnimation' autoPlay loop>

          <source src={LoginAnimation} type='video/mp4'/>
          Your browser does not support mp4s.
        </video>

        <Heading className='loginStart-Heading' lineHeight={1.3}>
          Smarter choices for a better tomorrow
        </Heading>

        <Button className='loginStart-Button' backgroundColor={'#6cce58'} color={'#f6f6f6'}>
          Get started
        </Button>

        <Button className='loginStart-Button' backgroundColor={'#f6f6f6'} color={'#6cce58'}>
          Log in
        </Button>

        <Text className='loginStart-text'>
          By continuing, you agree to the <span style={{color: "#6cce58"}}>Terms of Service </span> 
          and <span style={{color: "#6cce58"}}> Privacy Policy</span>
        </Text>
      </Stack>
    </div>
  )
}

export default login;
