import React from 'react'
import {Box,Text,Image} from 'native-base'
import Header from '../Components/Header'

const Detail = (params) =>{
    const {navigation} = params
    const {route} = params
return(
    <Box p="10">
       <Header navigation={navigation} />
       <Box pt="5">
       <Box w="255" h="200" rounded={'30'} bgColor={"#fff"} mr="3">
        <Image source={route.params.item.image} w="272" h="160" alt="otel" mt="3"/>
        <Text fontWeight={'bold'} ml="5" >{route.params.item.name}</Text>
    </Box>
       </Box>
    </Box>
)
}

export default Detail