/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Button} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import MenuIcon from '../assets/menu.svg';
import SearchIcon from '../assets/search.svg';
const DetailScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'cyan',
      }}>
      <Text>Detail Screen</Text>
      <Text>Viet nam vo dich</Text>
      <View style={styles.appHeader}>
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
export default DetailScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 20,
  },
  normalDot: {
    height: 5,
    width: 5,
    borderRadius: 5,
    marginHorizontal: 4,
    backgroundColor: '#fff',
  },
  indicatorWrapper: {
    flexDirection: 'row',
    position: 'absolute',
    top: 160,
    left: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topInfoWrapper: {
    flex: 1,
    marginTop: 160,
    justifyContent: 'space-between',
  },
  city: {
    fontSize: 30,
    color: '#fff',
    // fontFamily: 'Lato-Regular ',
    fontWeight: 'bold',
  },
  time: {
    color: '#fff',
    // fontFamily: 'Lato-Regular ',
    fontWeight: 'bold',
  },
  temperature: {
    color: '#fff',
    fontSize: 85,
    // fontFamily: 'Lato-Thin',
  },
  textWeather: {
    color: '#fff',
    fontSize: 25,
    lineHeight: 34,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  bottomInfoWrapper: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'space-between',
  },
  infoText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
  infoBar: {
    width: 45,
    height: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 5,
  },
  appHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    position: 'absolute',
    paddingHorizontal: 20,
    top: 0,
    width: '100%',
    height: getStatusBarHeight() + 40,
  },
});
