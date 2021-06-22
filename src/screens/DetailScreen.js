/* eslint-disable react-hooks/exhaustive-deps */
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
  StatusBar,
  Image,
  ImageBackground,
  useWindowDimensions,
  Animated,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import SunIcon from '../assets/sun.svg';
import CloudIcon from '../assets/cloudy.svg';
import MoonIcon from '../assets/moon.svg';
import RainIcon from '../assets/rain.svg';
import MenuIcon from '../assets/menu.svg';
import SearchIcon from '../assets/search.svg';
import Locations from '../model/locations';

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
const DetailScreen = ({navigation, route}) => {
  const cityName = route.params.textVn[0];
  useEffect(() => {
    async function fetchData() {
      try {
        const requestUrl = `http://api.openweathermap.org/data/2.5/weather?appid=86183a23377ed034aef7aad102f43d64&units=metric&q=${cityName}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        const data = responseJSON;
        setTemp(data.main.temp);
        setTempMax(data.main.temp_max);
        setTempMin(data.main.temp_min);
        setWeatherMain(data.weather[0].main);
        setPressure(data.main.pressure);
        setHumidity(data.main.humidity);
        setSpeed(data.wind.speed);
        setGust(data.wind.gust);
        setDeg(data.wind.deg);
      } catch (error) {
        console.log('fail...', error.message);
      }
    }
    fetchData();
  }, []);

  const [temp, setTemp] = useState(0);
  const [tempMax, setTempMax] = useState(0);
  const [tempMin, setTempMin] = useState(0);
  const [weatherMain, setWeatherMain] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [pressure, setPressure] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [gust, setGust] = useState(0);
  const [deg, setDeg] = useState(0);
  const {width: windowWidth, height: windowHeight} = useWindowDimensions();
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={{width: windowWidth, height: windowHeight}}>
        <ImageBackground
          source={require('../assets/night2.jpg')}
          style={{flex: 1, flexDirection: 'column'}}>
          {/* ROW 1 */}
          <View
            style={{
              flex: 0.07,
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
            <Button
              title={'Back Home'}
              onPress={() => navigation.navigate('WeatherApp')}
            />
          </View>
          {/* ROW 2 CITY NAME*/}
          <View
            style={{flex: 0.1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 40, color: '#fff', fontWeight: 'bold'}}>
              {route.params.textVn[0]}
            </Text>
          </View>
          {/* ROW 3 TEMPERATURE AND WEATHER STYLE CITY*/}
          <View style={{flex: 0.15, flexDirection: 'row'}}>
            <View
              style={{
                flex: 0.6,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: '#fff', fontSize: 70}}>{`${Math.floor(
                temp / 1,
              )}\u2103`}</Text>
            </View>
            <View
              style={{
                flex: 0.4,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: '#fff', fontSize: 25}}>{weatherMain}</Text>
            </View>
          </View>
          {/* ROW 4 MAX AND MIN TEMPERATURE*/}
          <View style={{flex: 0.08, flexDirection: 'row'}}>
            <View
              style={{
                flex: 0.5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 15, color: '#fff', fontWeight: 'bold'}}>
                Temp_Max: {`${Math.floor(tempMax / 1)}\u2103`}
              </Text>
            </View>
            <View
              style={{
                flex: 0.5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 15, color: '#fff', fontWeight: 'bold'}}>
                Temp_Min: {`${Math.floor(tempMin / 1)}\u2103`}
              </Text>
            </View>
          </View>
          {/* ROW 5 HUMIDITY  */}
          <View
            style={{
              flex: 0.1,
              borderBottomWidth: 1,
              borderBottomColor: 'gray',
              marginHorizontal: 4,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                fontSize: 20,
                color: '#fff',
                fontWeight: 'bold',
                marginLeft: 10,
              }}>
              Humidity (%):
            </Text>
            <Text
              style={{
                fontSize: 30,
                color: '#fff',
                fontWeight: 'bold',
                marginLeft: 10,
              }}>
              {humidity}
            </Text>
          </View>
          {/* ROW 6 PRESSURE  */}
          <View
            style={{
              flex: 0.1,
              borderBottomWidth: 1,
              borderBottomColor: 'gray',
              marginHorizontal: 4,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                fontSize: 20,
                color: '#fff',
                fontWeight: 'bold',
                marginLeft: 10,
              }}>
              Pressure (Bar):
            </Text>
            <Text
              style={{
                fontSize: 30,
                color: '#fff',
                fontWeight: 'bold',
                marginLeft: 10,
              }}>
              {pressure}
            </Text>
          </View>
          {/* ROW 7 WIND SPEED  */}
          <View
            style={{
              flex: 0.05,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                color: '#fff',
                fontWeight: 'bold',
                marginLeft: 10,
              }}>
              Wind
            </Text>
          </View>

          <View
            style={{
              flex: 0.08,
              borderBottomWidth: 1,
              borderBottomColor: 'gray',
              marginHorizontal: 4,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 13,
                  color: '#fff',
                  fontWeight: 'bold',
                  marginLeft: 10,
                }}>
                Speed (m/s)
              </Text>
              <Text
                style={{
                  fontSize: 17,
                  color: '#fff',
                  fontWeight: 'bold',
                  marginLeft: 10,
                }}>
                {speed}
              </Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 13,
                  color: '#fff',
                  fontWeight: 'bold',
                  marginLeft: 10,
                }}>
                Deg (°)
              </Text>
              <Text
                style={{
                  fontSize: 17,
                  color: '#fff',
                  fontWeight: 'bold',
                  marginLeft: 10,
                }}>
                {deg}
              </Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 13,
                  color: '#fff',
                  fontWeight: 'bold',
                  marginLeft: 10,
                }}>
                Gust (km/h)
              </Text>
              <Text
                style={{
                  fontSize: 17,
                  color: '#fff',
                  fontWeight: 'bold',
                  marginLeft: 10,
                }}>
                {gust}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};
export default DetailScreen;
const styles = StyleSheet.create({
  tinyLogo: {
    width: 30,
    height: 30,
  },
});
