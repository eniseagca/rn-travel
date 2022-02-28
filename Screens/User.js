import React, { useState } from 'react'
import { Box, Checkbox, Button } from 'native-base'
import UserInfo from '../Components/UserInfo'
import UserAddress from '../Components/UserAddress'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Info from '../json/UserInfo.json'

const User = (props) => {
  const { navigation } = props
  const { route } = props
  const token = route.params.token
  const [status, setStatus] = useState(false)
  function Active () {
    setStatus(!status)
  }
  function gonder () {
    Info.active.active = status
    console.log(Info)
  }

  return (
        <Box p="10" justifyContent={'center'} flex={1}>
            <Box flex={0.8}>
            <Header navigation={navigation} route ={token}/>
            <UserInfo />
            <UserAddress/>
            <Checkbox onPress={() => Active()}>Active</Checkbox>
            <Button onPress={() => gonder()}>Gonder</Button>
            </Box>
            <Box flex={0.2} justifyContent={'flex-end'}>
             <Footer navigation={navigation} route={token}/>
             </Box>
             </Box>
  )
}

export default User
