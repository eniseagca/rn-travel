import React, { useEffect, useState } from "react";
import {Box,Text, Input,HStack,Image} from "native-base"
import { Pressable } from "react-native";
import Home from "./Home";

const Search = (props) =>{
    let deger = props.route.params.deger
    const [input,setInput] = useState('')
    const [dondur,setDondur] = useState([])

    useEffect(()=>{
        Ara(deger)
    },[])

    const Otel = [
        {
        "id" : 1,
        "name" : "Misty Rock Resort",
        "location" :"Wayanad",
        "image" : require('../img/otel1.png')
    
        },
        {
            "id":"2",
            "name":"Hilton Mis",
            "location": "Turkey",
            "image": require('../img/otel2.png')
        }
    ]
function Ara(inputg){
setDondur(Otel.filter(item => item.name.includes(inputg)))
 }

    return(
        <Box p="10" flex={1}>
       <Text fontWeight={'bold'} fontSize={'20'}>Find Your Stay</Text>
        <HStack justifyContent={'space-around'} alignItems={'center'}>
      <Input placeholder="Search here..." w="270" h="35" borderRadius={'md'} bgColor={'#fff'} onChangeText={(text)=>setInput(text)}/>
       
    <Pressable onPress={()=>Ara(input)}> 
            <Image source={require('../img/option.png')} w="50" h="50" alt="option"/>
     </Pressable>
        </HStack>
       {dondur.map((index) => 
        <Box w="255" h="240" rounded={'30'} bgColor={"#fff"} mb="3" ml="5">
        <Image source={index.image} w="272" h="160" alt="otel" mt="3"/>
        <Text fontWeight={'bold'} ml="5" >{index.name}</Text>
        <Text fontWeight={'bold'} ml="5" >{index.location}</Text>
    
    </Box>
       ) }
        </Box>
    )
}

export default Search