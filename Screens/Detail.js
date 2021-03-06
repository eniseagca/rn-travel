import React from 'react'
import { Box, Text, Image, Button, HStack } from 'native-base'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const Detail = (params) => {
  const { navigation } = params
  const { route } = params
  const token = route.params.token
  return (
        <Box p="10" flex={1}>
            <Header navigation={navigation} />
            <Box pt="5" flex=".8">
                <Box justifyContent={'space-around'} rounded={'30'} bgColor={'#fff'} >
                   <Box alignItems={'center'}>
                   <Image source={route.params.item.image} w="272" h="160" alt="otel" mt="5" />
                   </Box>

                    <Text fontWeight={'bold'} mx="4" mt="10" >{route.params.item.name}</Text>
                    <Text mx="4" mt="7">{route.params.item.desc}</Text>

                <HStack my="50" justifyContent={'center'}>
                    <Text fontSize={'24'}>
                    $ {route.params.item.price} / day
                    </Text>
                    <Button ml="30" bgColor={'#F05A22'} w="100" h="35" _text={{ fontSize: '16' }}>
                    Continue
                    </Button>
                </HStack>

            </Box>
            </Box>
            <Box h="70" justifyContent={'flex-end'} flex=".2">
            <Footer route = {token} navigation={navigation} />
            </Box>

        </Box>
  )
}

export default Detail
