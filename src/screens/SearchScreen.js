/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, TouchableOpacity, Button} from 'react-native';
const SearchScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'cyan',
      }}>
      <Text>SEARCH SCREEN</Text>
      <View style={{flex: 1, backgroundColor: 'yellow'}}>
        <TouchableOpacity onPress={() => {}}>
          <Text>Click me</Text>
          {/* <SearchIcon width={25} height={25} fill="#000" /> */}
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => {}}>
          <MenuIcon width={25} height={25} fill="#000" />
        </TouchableOpacity> */}
      </View>
      <Button title="back" onPress={() => navigation.navigate('Weather App')} />
    </View>
  );
};
export default SearchScreen;
