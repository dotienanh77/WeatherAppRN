/* eslint-disable react-hooks/exhaustive-deps */
// import PushNotificationIOS from '@react-native-community/push-notification-ios';
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Platform,
  StatusBar,
  Image,
  ImageBackground,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import {styles} from './styles';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
const HomeScreen = ({navigation}) => {
  const [temperature, setTemperature] = useState(0);
  // const [hourTime, setHour] = useState(0);
  // const [minuteTime, setMinute] = useState(0);
  const [dateTime, setDateTime] = useState(0);
  const [monthTime, setMonthTime] = useState(0);
  const [yearTime, setYearTime] = useState(0);
  const [tempMax, setTempMax] = useState(0);
  const [tempMin, setTempMin] = useState(0);
  const [wind, setWind] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [clouds, setClouds] = useState(0);
  const [imageIcon, setIcon] = useState();
  const [weatherMain, setWeatherMain] = useState('');
  const [cityName, setCityName] = useState('');
  const {width: windowWidth, height: windowHeight} = useWindowDimensions();

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
        let hour = new Date().getHours();
        let minute = new Date().getMinutes();
        setDateTime(date);
        setMonthTime(month);
        setYearTime(year);
        // setHour(hour);
        // setMinute(minute);
        setTemperature(data.main.temp);
        setTempMax(data.main.temp_max);
        setTempMin(data.main.temp_min);
        setClouds(data.clouds.all);
        setHumidity(data.main.humidity);
        setWind(data.wind.speed);
        setWeatherMain(data.weather[0].main);
        setCityName(data.name);

        if (data.weather[0].main === 'Clouds') {
          setIcon(require('../../assets/clouds.png'));
        } else if (data.weather[0].main === 'Rain') {
          setIcon(require('../../assets/rain.png'));
        } else if (data.weather[0].main === 'Clear') {
          setIcon(require('../../assets/sun.png'));
        } else if (data.weather[0].main === 'Dust') {
          setIcon(require('../../assets/dust.png'));
        } else {
          setIcon(require('../../assets/haze.png'));
        };

        PushNotificationIOS.scheduleLocalNotification({
          alertBody:
            'The main weather today is: ' +
            weatherMain +
            '\n Temp max: ' +
            `${Math.floor(data.main.temp_max / 1)}\u2103` +
            ', Temp min: ' +
            `${Math.floor(data.main.temp_min / 1)}\u2103`,
          fireDate: new Date(Date.now() + 1 * 1000).getTime(),
        });

      } catch (error) {
        console.log('fail...', error.message);
      }
    }
    fetchData();
  }, []);
  /// push local notification
  // useEffect(() => {
  //   PushNotificationIOS.presentLocalNotification({
  //     alertTitle: 'thông báo hệ thống',
  //     alertBody: 'thời tiết bây giờ là',
  //   });
  // });

  // useEffect(() => {
  //   PushNotificationIOS.scheduleLocalNotification({
  //     // alertTitle: 'thông báo hệ thống',
  //     alertBody:
  //       'The main weather today is: ' +
  //       weatherMain +
  //       '\n Temp max: ' +
  //       `${Math.floor(tempMax / 1)}\u2103` +
  //       ', Temp min: ' +
  //       `${Math.floor(tempMin / 1)}\u2103`,
  //     fireDate: new Date(Date.now() + 1 * 1000).getTime(),
  //   });
  // },[]);
  // let fireDate = new Date(Date.now() + 5 * 1000).getTime();
  // let alertTitle = 'Push Notification';
  //  const TimeAlert = () => {
  //   if ((hourTime === '08') && (minuteTime ==='00')) {
  //     PushNotificationIOS.scheduleLocalNotification({
  //       alertTitle: 'thông báo hệ thống',
  //       alertBody: 'thời tiết bây giờ là',
  //       fireDate: new Date(Date.now() + 5 * 1000).getTime(),
  //     });
  //     }
  //   }
  //  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={{width: windowWidth, height: windowHeight}}>
        <ImageBackground
          source={require('../../assets/HomeBackground.jpg')}
          style={{flex: 1}}>
          <View style={{flex: 1, marginTop: Platform.OS === 'ios' ? 35 : 0}}>
            <View style={styles.container}>
              <View style={styles.topHeaderIcon}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('SearchScreen')}>
                  <Image
                    style={styles.tinyLogo}
                    source={require('../../assets/look.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('DetailMainScreen')}>
                  <Image
                    style={styles.tinyLogo1}
                    source={require('../../assets/detail.png')}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.topInfoWrapper}>
                <View>
                  <Text style={styles.city}>{cityName}</Text>
                  <Text style={styles.time}>
                    {dateTime} - {monthTime} - {yearTime}
                  </Text>
                </View>
                <View>
                  <Text style={styles.temperature}>{`${Math.floor(
                    temperature / 1,
                  )}\u2103`}</Text>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image style={styles.tinyLogoWeather} source={imageIcon} />
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
                  <Text style={styles.infoText}>km/h</Text>
                  <View style={styles.infoBar}>
                    <View
                      style={{
                        width: wind / 2,
                        height: 5,
                        // backgroundColor: '#F44336',
                        backgroundColor: '#69F0AE',
                        borderRadius: 5,
                      }}
                    />
                  </View>
                </View>
                <View style={{alignItems: 'center'}}>
                  <Text style={styles.infoText}>Clouds</Text>
                  <Text style={[styles.infoText, {fontSize: 24}]}>
                    {clouds}
                  </Text>
                  <Text style={styles.infoText}>%</Text>
                  <View style={styles.infoBar}>
                    <View
                      style={{
                        width: clouds / 2,
                        height: 5,
                        backgroundColor: '#69F0AE',
                        // borderRadius: 5,
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
                        width: humidity / 2,
                        height: 5,
                        backgroundColor: '#69F0AE',
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
