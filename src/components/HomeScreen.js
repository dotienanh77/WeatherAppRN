/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Button} from 'react-native';
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
        onPress={() => navigation.navigate('DetailScreen')}
        // color="#841584"
      />
      <Button
        title={'Search Screen'}
        onPress={() => navigation.navigate('SearchScreen')}
        color="#841584"
      />
    </View>
  );
};
export default HomeScreen;
