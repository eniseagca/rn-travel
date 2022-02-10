import React, { useEffect, useState } from "react";
import { Box, Text, Input, Button, HStack } from 'native-base'
import { ImageBackground } from "react-native";
import Header from "../Components/Header";
const List = (props) => {
    const {navigation} = props
    const [dizi, setDizi] = useState(["Uyan", "Duş", "kahvaltı", "iş"])
    const [input, setInput] = useState('')

    function Ekle(input) {
        setDizi(dizi.concat(input))
    }
    function Sil(idx) {
        setDizi(dizi.filter((value, index) => index != idx))
    }


    return (
        <Box p="10">
            <Header navigation={navigation}/>

            <Box justifyContent={'center'} alignItems={'center'} p="10" mt="10">

                <HStack>
                    <Input onChangeText={(text) => setInput(text)} w="200" />
                    <Button bgColor={'#F05A22'} onPress={() => Ekle(input)} ml="10"> Ekle </Button>
                </HStack>
                <Box>

                    {dizi.map((value, index) =>
                        <HStack mt="5">
                            <Text> * </Text>
                            <Text w="200">{value}</Text>
                            <Button bgColor={'#F05A22'} onPress={() => Sil(index)} ml="2">Sil</Button>
                        </HStack>
                    )
                    }
                </Box>
            </Box>
        </Box>
    )

}

export default List