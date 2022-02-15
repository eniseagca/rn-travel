import React from "react";
import {Box,Image,Text,HStack} from 'native-base'
import { Pressable } from "react-native";

const Footer = ({navigation}) =>{
    
    return(
        <Box flex={.2}>
        <HStack justifyContent={'space-around'} alignItems={'center'}>
            <Pressable onPress={()=>navigation.navigate('home')} >
            <Image source={require('../img/home.png')} w="10" h="10" mt="2" alt="home" /> 
            </Pressable>
              <Pressable>
             <Image source={require('../img/notification.png')} w="5" h="5" alt="noti" />
             </Pressable>
            <Pressable onPress={()=>navigation.navigate('favorite')}>
            <Image source={require('../img/saved.png')} w="5" h="5" alt="save" />
            </Pressable>
            
            <Pressable>
            <Image source={require('../img/profile.png')} w="5" h="5" alt="profil" />
            </Pressable>
            

        </HStack>
        </Box>
    )
}
export default Footer