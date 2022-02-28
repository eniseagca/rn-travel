import React, { useEffect, useState } from 'react'
import { Box, Text, FlatList, Image, HStack, Button } from 'native-base'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const Properties = (props) => {
  const { navigation } = props
  const [otel, setOtel] = useState([])
  useEffect(() => {
    setOtel(route.params.Otel)
  })

  const { route } = props
  const token = route.params.token
  return (
<Box flex={1} justifyContent='center' px="5" mt="5">
    <Header navigation={navigation} route = {token}/>
    <Box flex={0.9}>
<FlatList showsVerticalScrollIndicator={false} data={otel} keyExtractor={(item) => item.id} renderItem={({ item }) => (
<Box mt="5">
    <HStack>
    <Image source={item.image} borderRadius={'30'} w="180" h="120" alt="otel" />
    <Box ml="3">
    <Text fontWeight={'semibold'} color={'cyan.500'}>{item.name}</Text>
    <Text color={'cyan.800'} mt="2">{item.location}</Text>
    <HStack mt="4">
    <Button bgColor={'#fff'} ><Image source={require('../img/fav.png')} w="4" h="4" alt="fav"/></Button>
    <Button bgColor={'orange.500'} w="87" h="8" ml="2"><Text color='#fff' fontSize={'12'}>${item.price}-Books</Text></Button>
    </HStack>

    </Box>

    </HStack>

    </Box>
)}/>
</Box>
<Box flex={'0.1'}>
<Footer navigation={navigation} route = {token}/>
</Box>

</Box>
  )
}

export default Properties
