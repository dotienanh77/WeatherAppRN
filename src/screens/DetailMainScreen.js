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
  Platform,
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

const DetailMainScreen = ({navigation}) => {
  useEffect(() => {
    async function fetchData() {
      try {
        const requestUrl = 'https://pro.openweathermap.org/data/2.5/forecast/daily?q=Saigon&cnt=7&appid=e6da80eb2a72709285a540c26f7feb2e';
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        const data = responseJSON;
        // setTempMax(data.main.temp_max);
        // setTempMin(data.main.temp_min);
        setTextCity(data.city.name);
      } catch (error) {
        console.log('fail...', error.message);
      }
    }
    fetchData();
  }, []);

  const [temp, setTemp] = useState(0);
  const [tempMax, setTempMax] = useState(0);
  const [tempMin, setTempMin] = useState(0);
  const [textCity, setTextCity] = useState('');
  console.log(textCity);
  const {width: windowWidth, height: windowHeight} = useWindowDimensions();
  return (
    <> 
      <StatusBar barStyle="light-content" />
      <View style={{width: windowWidth, height: windowHeight}}>
        <ImageBackground
          source={require('../assets/detailMainBackground.jpg')}
          style={{flex: 1, flexDirection: 'column'}}>
            <View style = {{flex: 1, marginTop: Platform.OS === 'ios' ? 35 : 0}}>
{/* ROW 1 */}
          <View style={styles.viewBackAndHome}>
            <TouchableOpacity
              onPress={() => navigation.navigate('HomeScreen')}>
              <Image
                style={styles.tinyLogo}
                source={require('../assets/back.png')}/>
            </TouchableOpacity>
          </View>
{/* ROW 2 CITY NAME*/}
          <View style={styles.viewCity}>
            <Text style={styles.textCity}>{textCity}</Text>
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
        </View>
        </ImageBackground>
      </View>
    </>
  );
};
export default DetailMainScreen;
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
  viewCity:{flex: 0.1, justifyContent: 'center', alignItems: 'center',backgroundColor:'green'},
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
