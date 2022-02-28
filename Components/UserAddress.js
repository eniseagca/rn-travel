import React, { useState } from 'react'
import { Box, Input } from 'native-base'
import Info from '../json/UserInfo.json'

const UserAddress = () => {
  const [address, setAddress] = useState({
    city: '',
    district: '',
    apartment: '',
    country: ''
  })
  const handleChange = (name, value) => {
    setAddress({
      ...address,
      [name]: value
    })
  }
  Info.userAdress.city = address.city
  Info.userAdress.district = address.district
  Info.userAdress.apartment = address.apartment
  Info.userAdress.country = address.country
  return (
<Box>
    <Input value={address.city} onChangeText={(text) => handleChange('city', text)} placeholder="City"/>
    <Input value={address.district} onChangeText={(text) => handleChange('district', text)} placeholder="District" />
    <Input value={address.apartment} onChangeText={(text) => handleChange('apartment', text)} placeholder="Apartment"/>
    <Input value={address.country} onChangeText={(text) => handleChange('country', text)} placeholder="Country" />
 </Box>
  )
}

export default UserAddress
