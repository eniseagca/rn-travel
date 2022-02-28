import React, { useState } from 'react'
import { Box, Input } from 'native-base'
import Info from '../json/UserInfo.json'

const UserInfo = () => {
  const [user, setUser] = useState({
    name: '',
    surname: '',
    gender: '',
    age: ''
  })
  const handleUserInfo = (name, value) => {
    setUser({
      ...Info.userInfo,
      [name]: value
    })
  }
  Info.userInfo.name = user.name
  Info.userInfo.surname = user.surname
  Info.userInfo.gender = user.gender
  Info.userInfo.age = user.age
  return (
        <Box mt="10">
            <Input value={user.name} onChangeText={(text) => handleUserInfo('name', text) } placeholder="Name"/>
            <Input value={user.surname} onChangeText={(text) => handleUserInfo('surname', text)} placeholder="Surname"/>
            <Input value={user.gender} onChangeText={(text) => handleUserInfo('gender', text)} placeholder="Gender" />
            <Input value={user.age} onChangeText={(text) => handleUserInfo('age', text)} placeholder="Age" />
        </Box>
  )
}

export default UserInfo
