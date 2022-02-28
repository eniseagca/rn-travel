import React from 'react'
import { Box, Input } from 'native-base'
import Video from 'react-native-video'

const Favorite = () => {
  return (
        <Box flex={1} justifyContent={'center'} bgColor={'black'}>
      <Video

         source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
resizeMode="cover"
            controls={true}
            ref={(ref) => {
              this.player = ref
            }}
            onBuffer={this.onBuffer}
            onEnd={this.onEnd}
            onError={this.videoError}
            />
        </Box>

  )
}
export default Favorite
