/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {

  StyleSheet,

} from 'react-native';
import Login from './src/Pages/Login';
import Home from './src/Pages/Home';
import Post_Details from './src/Pages/PostDetails';


const Stack = createNativeStackNavigator();


function App(): JSX.Element {
  

  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home"
      >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="PostDetails" component={Post_Details} />
      </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
