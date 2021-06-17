/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
const HomeScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <Text>Home Screen</Text>
      <Button
        title={'GOTO DETAIL SCREEN'}
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
};
const DetailScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <Text>Detail Screen</Text>
      <Button
        title={'GOTO MORE DETAILS...'}
        onPress={() => navigation.push('Detail')}
      />
      <Button title={'GOTO HOME'} onPress={() => navigation.navigate('Home')} />
      <Button title={'GOTO BACK'} onPress={() => navigation.goBack()} />
      <Button
        title={'GOTO THE FIRST SCREEN'}
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: 'green'},
          headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: 'bold'},
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'OVER VIEW'}}
          // options={{
          //   headerStyle: {backgroundColor: 'green'},
          //   headerTintColor: '#fff',
          //   headerTitleStyle: {fontWeight: 'bold'},
          // }}
        />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
