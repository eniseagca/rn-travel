import React from "react";
import {Box,Input,Text,FormControl,Heading,VStack,Button ,HStack ,Link} from 'native-base'

const Login = (props) => {
const {navigation } = props
    return(
        <Box flex={1} justifyContent={'center'} alignSelf={'center'} w="90%" maxW="290" >
            <Box mb="10">
           <Text coloe={'coolGray.800'} fontSize={'24'} fontWeight={'600'}>Welcome</Text>
           <Text color={'coolGray.600'} fontSize={'18'} fontWeight={'medium'}>Sign in to continue!</Text>
            </Box>
            <Box>
                <FormControl isRequired>
                    <FormControl.Label>Email ID</FormControl.Label>
                    <Input />
                </FormControl>
                <FormControl isRequired>
                    <FormControl.Label>Password</FormControl.Label>
                    <Input type="password" />
                </FormControl>
            </Box>
            <Box>
                <Link alignSelf={'flex-end'} _text={{color:'#F05A22'}} my="4">
                    Forget Password
                 </Link>
                <Button bgColor={'#F05A22'} onPress={()=>navigation.navigate('home')}>
                Sign In
                </Button>
                <HStack mt="6" justifyContent={'center'}>
                <Text color={'coolGray.600'}>I'm a new user.</Text>
                <Link _text={{color:'#F05A22'}}> Sign Up.</Link>
                </HStack>
               
            </Box>
      </Box>
    )
}

export default Login