import React, { useEffect } from "react";
import {Box,Text,Image ,HStack, Input ,Pressable , FlatList} from 'native-base'
import Header from '../Components/Header'
import Footer from "../Components/Footer"

const Home = () => {
const Otel = [
    {
    "id" : 1,
    "name" : "Misty Rock Resort",
    "location" :"Wayanad",
    "image" : require('../img/otel1.png')

    },
    {
        "id":"2",
        "name":"Hilton",
        "location": "Turkey",
        "image": require('../img/otel2.png')
    }
]
    return(

<Box p="10">
    <Header />
    <Box my="3">
        <Text fontWeight={'bold'} fontSize={'20'}>Find Your Stay</Text>
        <HStack justifyContent={'space-around'} alignItems={'center'}>
        <Input placeholder="Search here..." w="270" h="35" borderRadius={'md'} bgColor={'#fff'}/>
        <Image source={require('../img/option.png')} w="50" h="50" alt="option"/>
        </HStack>
    </Box>
    <Box>
        <HStack justifyContent={'space-around'}>
            <Box>
                <Image source={require('../img/circle1.png')} w="60.67" h="60.67" alt="circ1"/>
                <Text mt="1" ml="3">India</Text>
            </Box>
            <Box>
                 <Image source={require('../img/circle2.png')} w="60.67" h="60.67" alt="circ2"/>
                 <Text mt="1" ml="1">New York</Text>
            </Box>
            <Box>
                <Image source={require('../img/circle3.png')} w="60.67" h="60.67" alt="circ3"/>
                <Text mt="1" ml="2">Poland</Text>
            </Box>
            <Box>
                <Image source={require('../img/circle4.png')} w="60.67" h="60.67" alt="circ4"/>
                <Text mt="1" ml="1">Australia</Text>
            </Box>
            
        </HStack>
    </Box>

    <Box py="3">
        <HStack justifyContent={'space-between'} pb="3">
            <Text fontWeight={'bold'} fontSize={'20'} >Our Properties</Text>
            <Pressable>
                <Text color={'#F05A22'}>View All</Text>
            </Pressable>
        </HStack>

      <FlatList horizontal data={Otel} keyExtractor={(item) => item.id} renderItem={({item})=>(
    <Box w="255" h="200" rounded={'30'} bgColor={"#fff"} mr="3">
        <Image source={item.image} w="272" h="160" alt="otel" mt="3"/>
        <Text fontWeight={'bold'} ml="5" >{item.name}</Text>
    </Box>

      )} />
    </Box>
   
    <Box py="10" >
        <HStack justifyContent={'space-between'} >
            <Text fontWeight={'bold'} fontSize={'20'} >Popular</Text>
            <Pressable>
                <Text color={'#F05A22'}>View All</Text>
            </Pressable>
        </HStack>

      <FlatList horizontal data={Otel} keyExtractor={(item) => item.id} renderItem={({item})=>(
    <Box w="200" h="100" rounded={'30'} bgColor={"#fff"} mr="3">
        <HStack>
        <Image source={item.image} w="110" h="60" alt="otel" mt="3"/>
        <Text fontWeight={'bold'} ml="5" fontSize={'10'} w="20" pt="5">{item.name}</Text>
        </HStack>
    </Box>

      )} />
    </Box>

    <Box>
        <Footer />
    </Box>
</Box>
    )
}

export default Home