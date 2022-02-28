import React, { useEffect, useState } from 'react'
import { Box, Text, Input, Button, HStack, ScrollView } from 'native-base'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
const List = (props) => {
  const { navigation } = props
  const [dizi, setDizi] = useState(['Uyan', 'Kahvaltı', 'İş'])
  const [input, setInput] = useState('')

  function Ekle (input) {
    setDizi(dizi.concat(input))
  }
  function Sil (idx) {
    setDizi(dizi.filter((value, index) => index != idx))
  }

  return (
        <Box p="10" flex={1} bgColor={'#fff'}>
            <Header navigation={navigation} />

            <Box alignItems={'center'} mt="10" flex={0.8} >

                <HStack>
                    <Input onChangeText={(text) => setInput(text)} w="200" />
                    <Button bgColor={'#F05A22'} onPress={() => Ekle(input)} ml="10"> Ekle </Button>
                </HStack>
                <Box>
                <ScrollView showsVerticalScrollIndicator="false">
                    {dizi.map((value, index) =>
                        <HStack mt="5">
                            <Text> * </Text>
                            <Text w="200">{value}</Text>
                            <Button bgColor={'#F05A22'} onPress={() => Sil(index)} ml="2">Sil</Button>
                        </HStack>
                    )
                    }
                      </ScrollView>
                </Box>
            </Box>
                <Box flex={0.2} justifyContent={'flex-end'}>
                    <Footer />
                </Box>

        </Box>
  )
}

export default List
