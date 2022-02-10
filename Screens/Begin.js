import React from "react";
import { Box,Text,Image, Button } from "native-base";

const Begin = (props) => {
    const {navigation} = props
    return(

   
<Box flex={1} alignItems="center" p="10" mt="20">
    <Box>
<Image source={require('../img/logo.png')} w="300" h="300" alt="logo"/>
<Text fontSize={'22'} fontWeight={'bold'} my="5" textAlign={'center'}>
Discover a Hotel & Resort to  Book a Suitable Room
</Text>
<Text fontSize={'16'} color={'gray.500'} textAlign={'center'}>
    The hotel and resort business is one of the best and loyal businessinte global market.
    We are the agency that helps to book you a good room in a suitable palace  at a reasonable price.
</Text>
    </Box>
    <Box mt="50">
<Button bgColor={'#F05A22'} w="200" h="10" alignItems={'center'} rounded={'10'} _text={{ fontSize:'20'}} onPress={()=>navigation.navigate('login')}>
Get Started
</Button>
    </Box>
</Box>
 )
}

export default Begin 