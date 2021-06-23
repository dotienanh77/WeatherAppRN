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
  Platform,
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

// const DetailScreen = ({navigation, route}) => {
  const DetailScreen = ({ navigation: { navigate },route })=> {

  // const WeatherIcon = weatherMain => {
  //   if (weatherMain === 'Night') {
  //     return <MoonIcon width={34} height={34} fill="#fff" />;
  //   }
  //   if (weatherMain === 'Clouds') {
  //     return <CloudIcon width={34} height={34} fill="#fff" />;
  //   }
  //   if (weatherMain === 'Sunny') {
  //     return <SunIcon width={34} height={34} fill="#fff" />;
  //   }
  //   if (weatherMain === 'Rainy') {
  //     return <RainIcon width={34} height={34} fill="#fff" />;
  //   }
  // };
  const cityName = route.params.textVn[0];

  useEffect(() => {
    async function fetchData() {
      try {
        const requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=e6da80eb2a72709285a540c26f7feb2e&units=metric`;
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
  const [weatherMain, setWeatherMain] = useState('');
  const [humidity, setHumidity] = useState(0);
  const [pressure, setPressure] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [gust, setGust] = useState(0);
  const [deg, setDeg] = useState(0);
  const {width: windowWidth, height: windowHeight} = useWindowDimensions();

  const [text, setText] = useState("");
  const DetailButton = (text) => {
      setTimeout(() => {
        setText(route.params.textVn[0]);
        return navigate('MoreDetailScreen2', {text:[text]});
    }, 2000);
  };
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={{width: windowWidth, height: windowHeight}}>
        <ImageBackground
          source={require('../assets/night2.jpg')}
          style={{flex: 1, flexDirection: 'column'}}>
            <View style = {{flex: 1, marginTop: Platform.OS === 'ios' ? 35 : 0}}>
{/* ROW 1 */}
          <View style={styles.viewBackAndHome}>
            <TouchableOpacity
              // onPress={() => navigation.navigate('SearchScreen')}>
               onPress={() => navigate('SearchScreen')}> 
              <Image
                style={styles.tinyLogo}
                source={require('../assets/back.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              // onPress={() => navigation.navigate('MoreDetailScreen2')}>
              onPress={() => DetailButton(text)}>
              <Image
                style={styles.tinyLogo1}
                source={require('../assets/detail.png')}
              />
            </TouchableOpacity>
          </View>
{/* ROW 2 CITY NAME*/}
          <View style={styles.viewCity}>
            <Text style={styles.textCity}>{route.params.textVn[0]}</Text>
          </View>
{/* ROW 3 TEMPERATURE AND WEATHER STYLE CITY*/}
          <View style={styles.viewTemp}>
            <View style={styles.viewTemp1}>
              <Text style={styles.textTemp1}>{`${Math.floor(temp / 1)}\u2103`}</Text>
            </View>
            <View style={styles.viewState}>
              <Text style={styles.textState}>{weatherMain}</Text>
            </View>
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
{/* ROW 5 HUMIDITY  */}
          <View style={styles.viewHumidity}>
            <Text style={styles.textHumidity1}>Humidity (%): </Text>
            <Text style={styles.textHumidity2}>{humidity}</Text>
          </View>
{/* ROW 6 PRESSURE  */}
          <View
            style={styles.viewPressure}>
            <Text style={styles.textPressure1}>Pressure (Bar): </Text>
            <Text style={styles.textPressure2}>{pressure}</Text>
          </View>
{/* ROW 7 WIND SPEED  */}
          <View style={styles.viewWind1}>
            <Text style={styles.textWind1}>Wind </Text>
          </View>
          <View style={styles.viewWind2}>
            <View style={styles.viewWind3}>
              <Text style={styles.textWind2}>Speed (m/s)</Text>
              <Text style={styles.textWind3}>{speed}</Text>
            </View>
            <View style={styles.viewWind3}>
              <Text style={styles.textWind2}>Deg (°)</Text>
              <Text style={styles.textWind3}>{deg}</Text>
            </View>
            <View style={styles.viewWind3}>
              <Text style={styles.textWind2}>Gust (km/h)</Text>
              <Text style={styles.textWind3}>{gust}</Text>
            </View>
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
  tinyLogo1: {
    width: 30,
    height: 35,
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
  viewCity:{flex: 0.1, justifyContent: 'center', alignItems: 'center'},
  textCity:{fontSize: 40, color: '#fff', fontWeight: 'bold'},
// ROW 3
  viewTemp:{flex: 0.15, flexDirection: 'row'},
  viewTemp1:{
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTemp1:{color: '#fff', fontSize: 70},
  viewState:{
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textState:{color: '#fff', fontSize: 25},
// ROW 4
  viewTemp2: {flex: 0.08, flexDirection: 'row'},
  viewTempMaxMin:{
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTempMaxMin:{fontSize: 15, color: '#fff', fontWeight: 'bold'},
// ROW 5
  viewHumidity:{
    flex: 0.1,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginHorizontal: 4,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textHumidity1:{
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  textHumidity2:{
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
  },
// ROW 6
  viewPressure:{
    flex: 0.1,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginHorizontal: 4,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textPressure1:{
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  textPressure2:{
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
  },
// ROW 7
  viewWind1: {flex: 0.05,justifyContent: 'center', alignItems: 'center'},
  textWind1:{
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  viewWind2:{
    flex: 0.08,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginHorizontal: 4,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  viewWind3: {justifyContent: 'center', alignItems: 'center'},
  textWind2:{
    fontSize: 13,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  textWind3:{
    fontSize: 17,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
