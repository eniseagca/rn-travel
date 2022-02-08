import React from "react";
import {Box,Image,Text,HStack} from 'native-base'

const Footer = () =>{
    return(
        <Box flex={.2}>
        <HStack justifyContent={'space-around'} alignItems={'center'}>
            <Image source={require('../img/home.png')} w="10" h="10" mt="2" alt="home" />
            <Image source={require('../img/notification.png')} w="5" h="5" alt="noti" />
            <Image source={require('../img/saved.png')} w="5" h="5" alt="save" />
            <Image source={require('../img/profile.png')} w="5" h="5" alt="profil" />

        </HStack>
        </Box>
    )
}
export default Footer