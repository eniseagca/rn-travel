import React from 'react'
import {Box,HStack,Image,Text} from 'native-base'
import { Pressable } from 'react-native'

const Header = (props) =>{
    return(
    <Box name="header" mt="5">
        <HStack justifyContent={'space-between'} alignItems={'center'}>
        <Pressable onPress={()=>props.navigation.navigate('home')}><Image alt='pp' source={require('../img/profile.jpg')} w="43.5" h="43.5" rounded={'50'}/></Pressable>
        <Text >Hello , Niara ! </Text>
        <Box bgColor={'#fff'} w="38.72" h="38.72" rounded={'50'} shadow="2" justifyContent={'center'} alignItems={'center'}>
        <Image alt="noti" source={require('../img/notif.png')} w="14.32" h="17.26" />
        </Box>
        </HStack>
    </Box>

    )
}
export default Header