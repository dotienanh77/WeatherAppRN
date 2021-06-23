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

const MoreDetailScreen = ({navigation}) => {
    useEffect(() => {
    async function fetchData() {
      try {
        const requestUrl = 'https://pro.openweathermap.org/data/2.5/forecast/daily?q=Saigon&cnt=7&appid=e6da80eb2a72709285a540c26f7feb2e&units=metric';
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        const data = responseJSON;
        setCity(data.city.name);
        // setTemp(data.main.temp);
        // setTempMax(data.main.temp_max);
        // setTempMin(data.main.temp_min);
        // setWeatherMain(data.weather[0].main);
        // setPressure(data.main.pressure);
        // setHumidity(data.main.humidity);
        // setSpeed(data.wind.speed);
        // setGust(data.wind.gust);
        // setDeg(data.wind.deg); 
        // console.log(data);
      } catch (error) {
        console.log('fail...', error.message);
      }
    }
    fetchData();
  }, []);
  // const [city, setCity] = useState('');
  const [city, setCity] = useState('');

  const [temp, setTemp] = useState(0);
  const [tempMax, setTempMax] = useState(0);
  const [tempMin, setTempMin] = useState(0);


  const {width: windowWidth, height: windowHeight} = useWindowDimensions();
  return (
    <> 
      <StatusBar barStyle="light-content" />
      <View style={{width: windowWidth, height: windowHeight}}>
        <ImageBackground
          source={require('../assets/detailHomeBackground.jpg')}
          style={{flex: 1, flexDirection: 'column'}}>
{/* ROW 1 */}
          <View style={styles.viewBackAndHome}>
            <TouchableOpacity
              onPress={() => navigation.navigate('HomeScreen')}>
              <Image
                style={styles.tinyLogo}
                source={require('../assets/back.png')}
              />
            </TouchableOpacity>
          </View>
{/* ROW 2 CITY NAME*/}
          <View style={styles.viewCity}>
            <Text style={styles.textCity}>{city}</Text>
          </View>
{/* ROW 4 MAX AND MIN TEMPERATURE*/}
          <View style={styles.viewTemp2}>
            <View style={styles.viewTempMaxMin}>
              <Text style={styles.textTempMaxMin}>
                Temp_Max: {`${Math.floor(tempMax / 1)}\u2103`}</Text>
            </View>
            <View style={styles.viewTempMaxMin}>
              <Text style={styles.textTempMaxMin}>
                Temp_Min: {`${Math.floor(tempMin / 1)}\u2103`}</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};
export default MoreDetailScreen;
const styles = StyleSheet.create({
  tinyLogo: {
    width: 30,
    height: 30,
  },
// ROW 1 
  viewBackAndHome:{
    flex: 0.07,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop:10,
  },
// ROW 2   
  viewCity:{flex: 0.08, justifyContent: 'center', alignItems: 'center',backgroundColor:'green'},
  textCity:{fontSize: 30, color: '#fff', fontWeight: 'bold'},
// ROW 4 
  viewTemp2: {flex: 0.08, flexDirection: 'row'},
  viewTempMaxMin:{
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTempMaxMin:{fontSize: 15, color: '#fff', fontWeight: 'bold'},
});
