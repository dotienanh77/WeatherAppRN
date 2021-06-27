/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import Navigator from './src/Navigators';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
const App = () => {
  const [hoursTime, setHoursTime] = useState(0);
  const [minutesTime, setMinutesTime] = useState(0);
  const [secondsTime, setSecondsTime] = useState(0);
  const [tempMax, setTempMax] = useState(0);
  const [tempMin, setTempMin] = useState(0);
  const [weatherMain, setWeatherMain] = useState('');
  const hour = new Date().getHours();
  const minute = new Date().getMinutes();
  const second = new Date().getSeconds();
  useEffect(() => {
    async function fetchData() {
      try {
        const requestUrl =
          'https://api.openweathermap.org/data/2.5/weather?appid=86183a23377ed034aef7aad102f43d64&units=metric&id=1566083';
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        const data = responseJSON;
        setTempMax(data.main.temp_max);
        setTempMin(data.main.temp_min);
        setWeatherMain(data.weather[0].main);
      } catch (error) {
        console.log('fail...', error.message);
      }
    }
    fetchData();
  }, []);
  useEffect(() => {
    function GetRemind() {
      setTimeout(() => {
        setHoursTime(hour);
        setMinutesTime(minute);
        setSecondsTime(second);
      }, 1000);
    }
    GetRemind();
    if (hoursTime === 14 && minutesTime === 25 && secondsTime === 1){
      PushNotificationIOS.scheduleLocalNotification({
      alertBody:
        'The main weather today is: ' +
        weatherMain +
        '\n Temp max: ' +
        `${Math.floor(tempMax / 1)}\u2103` +
        ', Temp min: ' +
        `${Math.floor(tempMin / 1)}\u2103`,
  });}});

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1}}>
      <Navigator />
    </View>
  );
};
export default App;
