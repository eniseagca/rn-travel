import React, { useEffect, useState } from 'react'
import { Box, Button, Checkbox, Input } from 'native-base'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import usInfo from '../json/UserInfo.json'

const User2 = (props) => {
  const { navigation } = props
  const { route } = props
  const token = route.params.token
  const [user, setUser] = useState({
    name: '',
    surname: '',
    gender: '',
    age: ''
  })
  const [address, setAddress] = useState({
    city: '',
    district: '',
    apartment: '',
    country: ''
  })
  const [active, setActive] = useState(false)

  const handleChange = (name, value) => {
    setUser({
      ...user,
      [name]: value

    })
  }
  const changeAddress = (name, value) => {
    setAddress({
      ...address,
      [name]: value
    })
  }
  function changeActive (status) {
    setActive(!status)
  }

  function goster () {
    usInfo.userInfo.name = user.name
    usInfo.userInfo.surname = user.surname
    usInfo.userInfo.gender = user.gender
    usInfo.userInfo.age = user.age

    usInfo.userAdress.city = address.city
    usInfo.userAdress.apartment = address.apartment
    usInfo.userAdress.country = address.country
    usInfo.userAdress.district = address.district

    usInfo.active.active = active
    console.log(usInfo)
  }

  return (
      <Box p="10" justifyContent={'center'} flex={1}>
          <Header navigation={navigation} route={token} />
          <Box flex={0.8} >
        <Box mt="10">
        <Input value={user.name} onChangeText={(e) => handleChange('name', e)} placeholder='Name'/>
        <Input value={user.surname} onChangeText={(e) => handleChange('surname', e)} placeholder='Surname' />
        <Input value={user.gender} onChangeText={(e) => handleChange('gender', e)} placeholder='Gender'/>
        <Input value={user.age} onChangeText={(e) => handleChange('age', e)} placeholder='Age' />
    </Box>

    <Box>
        <Input value={address.city} onChangeText={(text) => changeAddress('city', text)} placeholder='City' />
        <Input value={address.district} onChangeText={(text) => changeAddress('district', text)} placeholder='District'/>
        <Input value={address.apartment} onChangeText={(text) => changeAddress('apartment', text)} placeholder='Apartment'/>
        <Input value={address.country} onChangeText={(text) => changeAddress('country', text)} placeholder='Country' />
    </Box>
    <Box>
        <Checkbox onPress={() => changeActive(active)}>Active</Checkbox>
    </Box>
    <Button onPress={() => goster()}>Goster</Button>s
    </Box>
    <Box flex={0.2} justifyContent={'flex-end'}>
    <Footer navigation={navigation} route={token}/>
    </Box>

    </Box>
  )
}

export default User2
