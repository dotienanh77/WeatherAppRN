/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, View, Button, TouchableOpacity} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import DetailMainScreen from './src/screens/DetailMainScreen';
import MoreDetailScreen2 from './src/screens/MoreDetailScreen2';
import SearchScreen from './src/screens/SearchScreen';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
        headerShown: false,
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen}  />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
        <Stack.Screen name="DetailMainScreen" component={DetailMainScreen} />
        <Stack.Screen name="MoreDetailScreen2" component={MoreDetailScreen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
