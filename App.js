import React from 'react';
import {NativeBaseProvider} from 'native-base';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Begin from './Screens/Begin'
import Home from './Screens/Home'


const Stack = createNativeStackNavigator()


const App = () => {
  
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown : false}}>
          <Stack.Screen name="begin" component={Begin}/>
          <Stack.Screen name="home" component={Home}/>
        </Stack.Navigator>
        </NavigationContainer>
    </NativeBaseProvider>
  )
}



export default App
