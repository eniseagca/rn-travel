import React, { useEffect, useState } from 'react'
import { Box, Text, Select, FlatList, Button, HStack, Image } from 'native-base'

const Movie = () => {
  const [data, setData] = useState([])
  const [weather, setWeather] = useState([])
  const [select, setSelect] = useState('')
  const [location, setLocation] = useState('')

  function getData () {
    const url = 'https://v2.jokeapi.dev/joke/' + select + '?amount=2'
    const res = fetch(url)
    return new Promise((resolve) => {
      resolve(res)
    })
  }

  async function getDataKullan () {
    try {
      const gelenData = await getData()
      const gelenJson = await gelenData.json()
      setData(gelenJson)
    } catch (error) {
      console.log(error.message)
    }
  }

  async function getWeather () {
    const url2 = 'https://weatherdbi.herokuapp.com/data/weather/' + location
    console.log(url2)
    const res = fetch(url2).then(response => response.json())
    return (res)
  }

  function getWeatherKullan () {
    getWeather().then((res) => setWeather(res))
  }

  async function PostVeri () {
    try {
      await fetch('https://webhook.site/2de23ba4-741e-4ae6-a32a-f5ee0bf610de', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: 'enise',
          password: '1234'
        })
      })
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Box justifyContent={'center'} pt="20" px="10">
        <Select onValueChange={itemValue => setSelect(itemValue)}>
            <Select.Item value="Programming" label="Programming"/>
            <Select.Item value="Dark" label="Dark" />
            <Select.Item value="Pun" label="Pun" />
        </Select>
<Button onPress={() => PostVeri()}>Veri Gonder</Button>

        <Button onPress={() => getDataKullan()} >Getir</Button>
        <Box h="200">
        <FlatList data={data.jokes} renderItem={({ item }) => (
            <Box>
                <Text>{item.joke}</Text>
                <Text>{item.setup}</Text>
                <Text>{item.delivery}</Text>

         </Box>
        )}/>
</Box>

        <Select onValueChange={itemValue => setLocation(itemValue)}>
            <Select.Item value="london" label="London"/>
            <Select.Item value="newyork" label="New York"/>
            <Select.Item value="izmir" label="İzmir" />
            <Select.Item value="istanbul" label="İstanbul" />
        </Select>
        <Button onPress={() => getWeatherKullan()}>Hava Durumu Getir</Button>
        <FlatList data={weather.next_days} renderItem={({ item }) => (
            <Box>
                <HStack>
                <Text w="150">
                    {item.day}
                </Text >
                <Image source={{ uri: item.iconURL }} w="10" h="10" alt="icon" mr="10"/>
                <Text>{item.comment}</Text>
                </HStack>

            </Box>
        )}
        />
    </Box>
  )
}

export default Movie
