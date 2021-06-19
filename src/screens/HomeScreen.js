/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useEffect, useState} from 'react';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  StatusBar,
  ImageBackground,
  useWindowDimensions,
  Animated,
  TouchableOpacity,
} from 'react-native';
// import SunIcon from '../assets/sun.svg';
// import CloudIcon from '../assets/cloudy.svg';
// import MoonIcon from '../assets/moon.svg';
// import RainIcon from '../assets/rain.svg';
import MenuIcon from '../assets/menu.svg';
import SearchIcon from '../assets/search.svg';

// const WeatherIcon = (weatherType) => {
//   if (weatherType === 'Night') {
//     return <MoonIcon width={34} height={34} fill="#fff" />;
//   }
//   if (weatherType === 'Cloudy') {
//     return <CloudIcon width={34} height={34} fill="#fff" />;
//   }
//   if (weatherType === 'Sunny') {
//     return <SunIcon width={34} height={34} fill="#fff" />;
//   }
//   if (weatherType === 'Rainy') {
//     return <RainIcon width={34} height={34} fill="#fff" />;
//   }
// };
const HomeScreen = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <View style={styles.appHeader}>
        <TouchableOpacity onPress={() => {}}>
          <SearchIcon width={25} height={25} fill="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <MenuIcon width={25} height={25} fill="#000" />
        </TouchableOpacity>
      </View> */}
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'yellow',
        }}>
        <Text>Home Screen</Text>

        <Button
          title={'GOTO DETAIL SCREEN'}
          onPress={() => navigation.navigate('DetailScreen')}
          // color="#841584"
        />
        <Button
          title={'SEARCH SCREEN'}
          onPress={() => navigation.navigate('SearchScreen')}
          // color="#841584"
        />
      </View>
    </>
  );
};
export default HomeScreen;
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
