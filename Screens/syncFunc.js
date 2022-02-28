import React from 'react'
import { Box, Button } from 'native-base'

const syncFunc = () => {
  async function asyncFunc() {
    console.log('loop başladı')
    for (let index = 0; index < 5; index++) {
      setTimeout(() => {console.log(index), 1000})
    }
    console.log('loop bitti')

  }


  <Box>
    <Button onPress={() => syncFunc()}>
      Sync
    </Button>
  </Box>

}

export default syncFunc