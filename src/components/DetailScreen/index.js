/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  Platform,
  ImageBackground,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import {styles} from './styles';

const DetailScreen = ({ navigation: { navigate },route })=> {
  const cityName = route.params.textVn[0];
  const [text, setText] = useState('');
  const [textRemind, setTextRemind] = useState('');
  const [temp, setTemp] = useState(0);
  const [tempMax, setTempMax] = useState(0);
  const [tempMin, setTempMin] = useState(0);
  const [weatherMain, setWeatherMain] = useState('');
  const [humidity, setHumidity] = useState(0);
  const [pressure, setPressure] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [gust, setGust] = useState(0);
  const [deg, setDeg] = useState(0);
  const [imageIcon, setIcon] = useState();
  const {width: windowWidth, height: windowHeight} = useWindowDimensions();

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
        setText(cityName);

        if ((data.weather[0].main) === 'Rain'){
          setTextRemind('Note: The weather of the City is Rainy. Bring an umbrella or raincoat when going out.');
          setIcon(require('../../assets/rain.png'));
        } else if ((data.weather[0].main) === 'Clouds'){
          setTextRemind('Note: The weather of the City is Cloud. Have you a good day.');
          setIcon(require('../../assets/clouds.png'));
        } else if ((data.weather[0].main) === 'Clear'){
          setTextRemind('Note: The weather of the City is Sunny. Please bring a hat or sunscreen when going out.');
          setIcon(require('../../assets/sun.png'));
        } else if ((data.weather[0].main) === 'Dust'){
          setTextRemind('Note: The weather of the City is Dusty. Please bring a mask when going out.');
          setIcon(require('../../assets/dust.png'));
        } else if ((data.weather[0].main) === 'Snow'){
          setTextRemind('Note: The weather of the City is Snow. Please wear warm clothes when going out.');
          setIcon(require('../../assets/snow.png'));
        } else {
          setTextRemind('Note: The weather of the City is Haze. Have you a good day.');
          setIcon(require('../../assets/haze.png'));
        }
      } catch (error) {
        console.log('fail...', error.message);
      }
    }
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={{width: windowWidth, height: windowHeight}}>
        <ImageBackground
          source={require('../../assets/detailScreenBackground.jpg')}
          style={{flex: 1, flexDirection: 'column'}}>
            <View style = {{flex: 1, marginTop: Platform.OS === 'ios' ? 35 : 0}}>
{/* ROW 1 */}
          <View style={styles.viewBackAndHome}>
            <TouchableOpacity
               onPress={() => navigate('SearchScreen')}>
              <Image
                style={styles.tinyLogo}
                source={require('../../assets/back.png')}/>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate('MoreDetailScreen2', {text:[text]})}>
              <Image
                style={styles.tinyLogo1}
                source={require('../../assets/detail.png')}/>
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
              <Image
                  style={styles.tinyLogoWeather}
                  source={imageIcon}/>
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
              <Text style={styles.textWind2}>Speed (km/h)</Text>
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
          <View style={{flex:0.1}}>
            <Text style={styles.textRemind}>{textRemind}</Text>
          </View>
        </View>
        </ImageBackground>
      </View>
    </>
  );
};
export default DetailScreen;
