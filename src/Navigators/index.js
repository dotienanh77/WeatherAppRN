/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../components/HomeScreen';
import DetailScreen from '../components/DetailScreen';
import DetailMainScreen from '../components/DetailMainScreen';
import MoreDetailScreen2 from '../components/MoreDetailScreen2';
import SearchScreen from '../components/SearchScreen';

const Stack = createStackNavigator();
const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
        headerShown: false,
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
        <Stack.Screen name="DetailMainScreen" component={DetailMainScreen} />
        <Stack.Screen name="MoreDetailScreen2" component={MoreDetailScreen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigator;
