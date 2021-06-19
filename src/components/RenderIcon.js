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
import SunIcon from '../assets/sun.svg';
import CloudIcon from '../assets/cloudy.svg';
import MoonIcon from '../assets/moon.svg';
import RainIcon from '../assets/rain.svg';
import MenuIcon from '../assets/menu.svg';
import SearchIcon from '../assets/search.svg';

const WeatherIcon = (weatherType) => {
  if (weatherType === 'Night') {
    return <MoonIcon width={34} height={34} fill="#fff" />;
  }
  if (weatherType === 'Cloudy') {
    return <CloudIcon width={34} height={34} fill="#fff" />;
  }
  if (weatherType === 'Sunny') {
    return <SunIcon width={34} height={34} fill="#fff" />;
  }
  if (weatherType === 'Rainy') {
    return <RainIcon width={34} height={34} fill="#fff" />;
  }
};
export default WeatherIcon;
