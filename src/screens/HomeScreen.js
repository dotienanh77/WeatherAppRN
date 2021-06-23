/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useEffect, useState} from 'react';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  Platform,
  StatusBar,
  Image,
  ImageBackground,
  SafeAreaView,
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

import Locations from '../model/locations';


const HomeScreen = ({navigation}) => {

  const WeatherIcon = weatherMain => {
    if (weatherMain === 'Night') {
      return <MoonIcon width={34} height={34} fill="#fff" />;
    }
    if (weatherMain === 'Clouds') {
      return <CloudIcon width={34} height={34} fill="#fff" />;
    }
    if (weatherMain === 'Sunny') {
      return <SunIcon width={34} height={34} fill="#fff" />;
    }
    if (weatherMain === 'Rainy') {
      return <RainIcon width={34} height={34} fill="#fff" />;
    }
};

  useEffect(() => {
    async function fetchData() {
      try {
        const requestUrl =
          'https://api.openweathermap.org/data/2.5/weather?appid=86183a23377ed034aef7aad102f43d64&units=metric&id=1566083';
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        const data = responseJSON;

        let date = new Date().getDate();
        let month = new Date().getMonth() + 1;
        let year = new Date().getFullYear();
        setDateTime(date);
        setMonthTime(month);
        setYearTime(year);

        setTemperature(data.main.temp);
        setPressure(data.main.pressure);
        setHumidity(data.main.humidity);
        setWind(data.wind.speed);
        setWeatherMain(data.weather[0].main);
      } catch (error) {
        console.log('fail...', error.message);
      }
    }
    fetchData();
  }, []);

  const [temperature, setTemperature] = useState(0);
  const [dateTime, setDateTime] = useState(0);
  const [monthTime, setMonthTime] = useState(0);
  const [yearTime, setYearTime] = useState(0);
  const [wind, setWind] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [pressure, setPressure] = useState(0);
  const [weatherMain, setWeatherMain] = useState('');
  const {width: windowWidth, height: windowHeight} = useWindowDimensions();
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={{width: windowWidth, height: windowHeight}}>
        <ImageBackground
          source={require('../assets/night2.jpg')}
          style={{flex: 1}}>
        <View style = {{flex: 1, marginTop: Platform.OS === 'ios' ? 35: 0}}>
          <View
            style={{
              flex: 0.1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 20,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('SearchScreen')}>
              <Image
                style={styles.tinyLogo}
                source={require('../assets/look.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('MoreDetailScreen')}>
              <Image
                style={styles.tinyLogo1}
                source={require('../assets/detail.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <View style={styles.topInfoWrapper}>
              <View>
                <Text style={styles.city}>Ho Chi Minh</Text>
                <Text style={styles.time}>
                  {dateTime} - {monthTime} - {yearTime}
                </Text>
              </View>
              <View>
                <Text style={styles.temperature}>{`${Math.floor(
                  temperature / 1,
                )}\u2103`}</Text>
                <View style={{flexDirection: 'row'}}>
                  {WeatherIcon({weatherMain})}
                  <Text style={styles.textWeather}>{weatherMain}</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                borderBottomColor: 'rgba(255,255,255,0.7)',
                marginTop: 20,
                borderBottomWidth: 1,
              }}
            />
            <View style={styles.bottomInfoWrapper}>
              <View style={{alignItems: 'center'}}>
                <Text style={styles.infoText}>Wind</Text>
                <Text style={[styles.infoText, {fontSize: 24}]}>{wind}</Text>
                <Text style={styles.infoText}>m/s</Text>
                <View style={styles.infoBar}>
                  <View
                    style={{
                      width: 5,
                      height: 5,
                      backgroundColor: '#69F0AE',
                      borderRadius: 5,
                    }}
                  />
                </View>
              </View>
              <View style={{alignItems: 'center'}}>
                <Text style={styles.infoText}>Pressure</Text>
                <Text style={[styles.infoText, {fontSize: 24}]}>
                  {pressure}
                </Text>
                <Text style={styles.infoText}>Bar</Text>
                <View style={styles.infoBar}>
                  <View
                    style={{
                      width: 5,
                      height: 5,
                      backgroundColor: '#F44336',
                      borderRadius: 5,
                    }}
                  />
                </View>
              </View>
              <View style={{alignItems: 'center'}}>
                <Text style={styles.infoText}>Humidity</Text>
                <Text style={[styles.infoText, {fontSize: 24}]}>
                  {humidity}
                </Text>
                <Text style={styles.infoText}>%</Text>
                <View style={styles.infoBar}>
                  <View
                    style={{
                      width: 5,
                      height: 5,
                      backgroundColor: '#F44336',
                      borderRadius: 5,
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
          </View>
        </ImageBackground>
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
    fontWeight: 'bold',
  },
  time: {
    color: '#fff',
    fontWeight: 'bold',
  },
  temperature: {
    color: '#fff',
    fontSize: 85,
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
  tinyLogo: {
    width: 30,
    height: 30,
  },
  tinyLogo1: {
    width: 30,
    height: 35,
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
