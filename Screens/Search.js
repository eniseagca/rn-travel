import React, { useEffect, useState } from "react";
import { Box, Text, Input, HStack, Image, SearchIcon } from "native-base"
import { Pressable } from "react-native";
import Footer from "../Components/Footer";
import Header from "../Components/Header"


const Search = (props) => {
    let deger = props.route.params.deger
    const [input, setInput] = useState('')
    const [dondur, setDondur] = useState([])
    const { navigation } = props

    useEffect(() => {
        Ara(deger)
    }, [])

    const Otel = [
        {
            "id": 1,
            "name": "Misty Rock Resort",
            "location": "Wayanad",
            "image": require('../img/otel1.png'),
            "price": "420",
            "desc": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. "
        },
        {
            "id": "2",
            "name": "Hilton Mis",
            "location": "Turkey",
            "image": require('../img/otel2.png'),
            "price": "450",
            "desc": " Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? "
        }
    ]
    function Ara(inputg) {
        setDondur(Otel.filter(item => item.name.includes(inputg)))
    }

    return (
        <Box p="10" flex={1}>
            <Header navigation={navigation}/>
            <Box flex={.8} mt="3">

                <Text fontWeight={'bold'} fontSize={'20'}>Find Your Stay</Text>
                <HStack justifyContent={'space-around'} alignItems={'center'}>
                    <Input placeholder="Search here..." w="270" h="35" borderRadius={'md'} bgColor={'#fff'} onChangeText={(text) => setInput(text)}
                    InputRightElement={<Pressable onPress={() => Ara(input)}><SearchIcon size={4} mr="2" color="muted.400"/></Pressable>}
                    />
                </HStack>
                {dondur.map((item) =>
                    <Box w="255" h="240" rounded={'30'} bgColor={"#fff"} my="3" ml="5">
                        <Pressable onPress={() => navigation.navigate('detail', { item })}>
                            <Image source={item.image} w="272" h="160" alt="otel" mt="3" />
                        </Pressable>

                        <Text fontWeight={'bold'} ml="5" >{item.name}</Text>
                        <Text fontWeight={'bold'} ml="5" >{item.location}</Text>

                    </Box>
                )}
            </Box>
            <Box flex={.2} justifyContent={'flex-end'}>
                <Footer navigation={navigation}/>
            </Box>
        </Box>
    )
}

export default Search