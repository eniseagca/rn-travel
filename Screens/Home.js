import React, { useEffect, useState } from 'react'
import { Box, Text, Image, HStack, Input, Pressable, FlatList, SearchIcon } from 'native-base'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const Home = (props) => {
  const { navigation } = props
  const { route } = props
  const token = route.params.token
  const [deger, setDeger] = useState('')
  const Otel = [
    {
      id: 1,
      name: 'Misty Rock Resort',
      location: 'Wayanad',
      image: require('../img/otel1.png'),
      price: '420',
      desc: 'Style never met and those among great. At no or september sportsmen he perfectly happiness attending. Depending listening delivered off new she procuring satisfied sex existence. Person plenty answer to exeter it if. Law use assistance especially resolution cultivated did out sentiments unsatiable. Way necessary had intention happiness but september delighted his curiosity. Furniture furnished or on strangers neglected remainder engrossed. '

    },
    {
      id: '2',
      name: 'Hilton',
      location: 'Turkey',
      image: require('../img/otel2.png'),
      price: '450',
      desc: 'An so vulgar to on points wanted. Not rapturous resolving continued household northward gay. He it otherwise supported instantly. Unfeeling agreeable suffering it on smallness newspaper be. So come must time no as. Do on unpleasing possession as of unreserved. Yet joy exquisite put sometimes enjoyment perpetual now. Behind lovers eat having length horses vanity say had its. '
    },
    {
      id: '3',
      name: 'Alaçatı',
      location: 'Turkey',
      image: require('../img/otel3.jpg'),
      price: '300',
      desc: 'An so vulgar to on points wanted. Not rapturous resolving continued household northward gay. He it otherwise supported instantly. Unfeeling agreeable suffering it on smallness newspaper be. So come must time no as. Do on unpleasing possession as of unreserved. Yet joy exquisite put sometimes enjoyment perpetual now. Behind lovers eat having length horses vanity say had its. '
    },
    {
      id: '4',
      name: 'Grannos',
      location: 'England',
      image: require('../img/otel4.jpg'),
      price: '500',
      desc: 'An so vulgar to on points wanted. Not rapturous resolving continued household northward gay. He it otherwise supported instantly. Unfeeling agreeable suffering it on smallness newspaper be. So come must time no as. Do on unpleasing possession as of unreserved. Yet joy exquisite put sometimes enjoyment perpetual now. Behind lovers eat having length horses vanity say had its. '
    },
    {
      id: '5',
      name: 'Miracle Resort Otel',
      location: 'Germany',
      image: require('../img/otel5.jpg'),
      price: '350',
      desc: 'An so vulgar to on points wanted. Not rapturous resolving continued household northward gay. He it otherwise supported instantly. Unfeeling agreeable suffering it on smallness newspaper be. So come must time no as. Do on unpleasing possession as of unreserved. Yet joy exquisite put sometimes enjoyment perpetual now. Behind lovers eat having length horses vanity say had its. '
    },
    {
      id: '6',
      name: 'Rox Hotel',
      location: 'Turkey',
      image: require('../img/otel6.jpeg'),
      price: '550',
      desc: 'An so vulgar to on points wanted. Not rapturous resolving continued household northward gay. He it otherwise supported instantly. Unfeeling agreeable suffering it on smallness newspaper be. So come must time no as. Do on unpleasing possession as of unreserved. Yet joy exquisite put sometimes enjoyment perpetual now. Behind lovers eat having length horses vanity say had its. '
    }
  ]
  return (

<Box p="10" flex={1}>
    <Header navigation={navigation} route ={token}/>
    <Box flex={0.8}>

    <Box my="3" >
        <Text fontWeight={'bold'} fontSize={'20'}>Find Your Stay</Text>
        <HStack justifyContent={'space-around'} alignItems={'center'}>
           <Input placeholder="Search here..." w="270" h="35" borderRadius={'md'} bgColor={'#white.100'} onChangeText={(text) => setDeger(text)}
           InputRightElement={<Pressable onPress={() => navigation.navigate('search', { deger })}><SearchIcon size={4} mr="2" color="muted.200" /></Pressable>}
           />
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
            <Pressable onPress={() => navigation.navigate('properties', { Otel, token })}>
                <Text color={'#F05A22'}>View All</Text>
            </Pressable>
        </HStack>

      <FlatList showsHorizontalScrollIndicator="false" horizontal data={Otel} keyExtractor={(item) => item.id} renderItem={({ item }) => (
           <Pressable onPress={() => navigation.navigate('detail', { item })}>
    <Box w="255" h="200" rounded={'30'} bgColor={'#fff'} mr="3">
        <Image source={item.image} w="272" h="160" alt="otel" mt="3" borderRadius={'20'} />
        <Text fontWeight={'bold'} ml="5" >{item.name}</Text>
    </Box>
    </Pressable>
      )} />

    </Box>

    <Box py="10" >
        <HStack justifyContent={'space-between'} >
            <Text fontWeight={'bold'} fontSize={'20'} >Popular</Text>
            <Pressable onPress={() => navigation.navigate('user', { token })}>
                <Text color={'#F05A22'}>User</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('user2', { token })}>
                <Text color={'#F05A22'}>User2</Text>
            </Pressable>
        </HStack>

      <FlatList showsHorizontalScrollIndicator="false" horizontal data={Otel} keyExtractor={(item) => item.id} renderItem={({ item }) => (
    <Box w="200" h="100" rounded={'30'} bgColor={'#fff'} mr="3">
        <HStack>
        <Image source={item.image} w="110" h="60" alt="otel" mt="5" ml="2"/>
        <Text fontWeight={'bold'} ml="2" fontSize={'10'} w="20" pt="5" mt="2">{item.name}</Text>
        </HStack>
    </Box>

      )} />
    </Box>
    </Box>
    <Box justifyContent={'flex-end'} flex={0.2}>
        <Footer navigation={navigation} route = {token}/>
    </Box>
</Box>
  )
}

export default Home
