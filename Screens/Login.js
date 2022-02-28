import React, { useEffect, useState } from 'react'
import { Box, Input, Text, FormControl, Button, HStack, Link } from 'native-base'
import { ActivityIndicator } from 'react-native'
import request from '../Func/Request'

const Login = (props) => {
  const [mail, setMail] = useState('eve.holt@reqres.in')
  const [status, setStatus] = useState(true)
  const [password, setPassword] = useState('')

  const { navigation } = props

  const f = async () => {
    setStatus(false)
    const answer = await request(mail, password)
    if (answer.token) {
      const token = answer.token
      navigation.navigate('home', { token })
      setStatus(true)
    } else {
      setStatus(true)
      console.warn(answer.error)
    }
  }

  return (
        <Box flex={1} justifyContent={'center'} alignSelf={'center'} w="90%" maxW="290" >
            <Box mb="10">
                <Text color={'coolGray.800'} fontSize={'24'} fontWeight={'600'}>Welcome</Text>
                <Text color={'coolGray.600'} fontSize={'18'} fontWeight={'medium'}>Sign in to continue!</Text>

            </Box>
            <Box>
                <FormControl isRequired>
                    <FormControl.Label>Email ID</FormControl.Label>
                    <Input value={mail} onChangeText={(text) => setMail(text)} />
                </FormControl>
                <FormControl isRequired>
                    <FormControl.Label>Password</FormControl.Label>
                    <Input type="password" onChangeText={(text) => setPassword(text)}/>
                </FormControl>
            </Box>
            <Box>
                <Link alignSelf={'flex-end'} _text={{ color: '#F05A22' }} my="4">
                    Forget Password
                </Link>
                {status
                  ? (<Button bgColor={'#F05A22'} onPress={() => f()}>
                    Sign In
                </Button>)
                  : (
                    <ActivityIndicator size="large"/>
                    )}

                <HStack mt="6" justifyContent={'center'}>
                    <Text color={'coolGray.600'}>I'm a new user.</Text>
                    <Link _text={{ color: '#F05A22' }}> Sign Up.</Link>
                </HStack>

            </Box>
        </Box>
  )
}

export default Login
