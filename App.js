import React from 'react'
import { NativeBaseProvider } from 'native-base'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Begin from './Screens/Begin'
import Home from './Screens/Home'
import List from './Screens/List'
import Search from './Screens/Search'
import Detail from './Screens/Detail'
import Login from './Screens/Login'
import Favorite from './Screens/Favorite'
import Properties from './Screens/Properties'
import Movie from './Screens/Movie'
import User from './Screens/User'
import User2 from './Screens/User2'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="begin" component={Begin}/>
          <Stack.Screen name="home" component={Home}/>
          <Stack.Screen name="list" component={List} />
          <Stack.Screen name="search" component={Search} />
          <Stack.Screen name="detail" component={Detail} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="favorite" component={Favorite} />
          <Stack.Screen name="properties" component={Properties} />
          <Stack.Screen name="movie" component={Movie} />
          <Stack.Screen name="user" component={User} />
          <Stack.Screen name="user2" component={User2} />
        </Stack.Navigator>
        </NavigationContainer>
    </NativeBaseProvider>
  )
}

export default App
