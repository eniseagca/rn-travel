import React ,{useState} from "react";
import { Box,Text,Image, Button, HStack  } from "native-base";
import { useWindowDimensions } from "react-native";
import {TabView,SceneMap} from 'react-native-tab-view'
import Header from "../Components/Header";
const FirstRoute = ({navigation}) => (
 
        <Box  flex={1} alignItems="center" p="10" mt="10">
        <Box>
       <Image source={require('../img/logo.png')} w="300" h="300" alt="logo"/>
<Text fontSize={'22'} fontWeight={'bold'} my="5" textAlign={'center'}>
Discover a Hotel & Resort to  Book a Suitable Room
</Text>
<Text fontSize={'16'} color={'gray.500'} textAlign={'center'}>
    The hotel and resort business is one of the best and loyal businessinte global market.
    We are the agency that helps to book you a good room in a suitable palace  at a reasonable price.
</Text>
    </Box>
    <Box mt="50">
<Button bgColor={'#F05A22'} w="200" h="10" alignItems={'center'} rounded={'10'} _text={{ fontSize:'20'}} onPress={()=>navigation.navigate('login')}>
Get Started
</Button>
</Box>
    </Box>
    )
   
const SecondRoute = ()=>(
        <Box>
          <Text>Second Route</Text>
         </Box>
)

const ThirdRoute = ()=>
    (
    <Box>
        <Text>Third Route</Text>
    </Box>
    )
    

const renderScene = SceneMap({
    first: FirstRoute,
    second : SecondRoute,
    third : ThirdRoute
})

const renderTabBar =  (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <Box mt="10" alignItems={'center'}>
    <Text fontSize={'24'} color={'#F05A22'}>Travel App</Text>       
      </Box>
    );
  };

const Begin = (props) => {
    const {navigation} = props
    const [index,setIndex] = useState(0)
const [routes] = useState([
    {
        key:"first",
        title: "first tab"
    },
    {
        key :"second",
        title:"second tab"
    },
    {
        key: "third",
        title: "third tab"
    }
])

    return(
     
    <TabView 
    navigationState={{index,routes}}
    renderScene={renderScene}
    onIndexChange={setIndex}
    renderTabBar={renderTabBar}
    />

 )
}

export default Begin 