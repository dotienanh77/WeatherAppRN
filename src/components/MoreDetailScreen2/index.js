/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Platform,
  StatusBar,
  Image,
  ImageBackground,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import {styles} from './styles';
const MoreDetailScreen2 = ({navigation, route}) => {
  const cityName = route.params.text[0];
  const {width: windowWidth, height: windowHeight} = useWindowDimensions();
  const [dataSource, setDataSource] = useState('');
  const [dataSource1, setDataSource1] = useState('');
  useEffect(() => {
    async function fetchData() {
      try {
        const requestUrl = `https://pro.openweathermap.org/data/2.5/forecast/daily?q=${cityName}&cnt=7&appid=e6da80eb2a72709285a540c26f7feb2e&units=metric`;
        const requestUrl1 = `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${cityName}&appid=e6da80eb2a72709285a540c26f7feb2e&cnt=24&units=metric`;
        const response = await fetch(requestUrl);
        const response1 = await fetch(requestUrl1);
        const responseJSON = await response.json();
        const responseJSON1 = await response1.json();
        const data = responseJSON;
        const data1 = responseJSON1;
        setDataSource(data.list);
        setDataSource1(data1.list);
      } catch (error) {
        console.log('fail...', error.message);
      }
    }
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
// ROW 3 STYLE 1
  const renderItem = ({item})=>{
    function getHourly(){
      const dataHours = new Date((item.dt) * 1000);
      const hour = dataHours.getHours();
      return hour;
    }
    // function getCurrentDay(){
    //   const dataDayMonth = new Date((item.dt) * 1000);
    //   const day = dataDayMonth.getDay();
    //   switch (day){
    //     case 0: return 'Sun';
    //     case 1: return 'Mon';
    //     case 2: return 'Tus';
    //     case 3: return 'Wed';
    //     case 4: return 'Thu';
    //     case 5: return 'Fri';
    //     case 6: return 'Sat';
    //   }
    // };
    function getIcon(){
      if (item.weather[0].main === 'Clouds'){
        return require('../../assets/clouds.png');
      } else if (item.weather[0].main === 'Rain'){
        return require('../../assets/rain.png');
      } else if (item.weather[0].main === 'Clear'){
        return require('../../assets/sun.png');
      } else if (item.weather[0].main === 'Dust'){
        return require('../../assets/dust.png');
      } else if (item.weather[0].main === 'Snow'){
        return require('../../assets/snow.png');
      } else {
        return require('../../assets/haze.png');
      }
    }
    return (
          <View style={styles.viewTextTemp}>
            <Text style={styles.textTemp}>{getHourly()}:00</Text>
            <Image
                style={styles.tinyLogoWeather1}
                source={getIcon()}/>
            <Text style={styles.textTemp}>{`${Math.floor(item.main.temp / 1)}\u2103`}</Text>
          </View>
    );
  };
// ROW 3 STYLE 2
  const renderItem1 = ({item})=>{
    function getCurrentDay(){
      const dataDateMonth = new Date((item.dt) * 1000);
      const date = dataDateMonth.getDate();
      if (date < 10){
        return '0' + date;
      } else {
      return date;
    }
    }
    function getCurrentMonth(){
      const dataDateMonth = new Date((item.dt) * 1000);
      const month = dataDateMonth.getMonth() + 1;
      return month;
    }
    function getCurrentYear(){
      const dataDateMonth = new Date((item.dt) * 1000);
      const year = dataDateMonth.getYear() - 100;
      return year;
    }
    function getIcon(){
      if (item.weather[0].main === 'Clouds'){
        return require('../../assets/clouds.png');
      } else if (item.weather[0].main === 'Rain'){
        return require('../../assets/rain.png');
      } else if (item.weather[0].main === 'Clear'){
        return require('../../assets/sun.png');
      } else if (item.weather[0].main === 'Dust'){
        return require('../../assets/dust.png');
      } else if (item.weather[0].main === 'Snow'){
        return require('../../assets/snow.png');
      } else {
        return require('../../assets/haze.png');
      }
    }
    return (
          <View style={styles.viewFlatList}>
            <Text style={styles.textTempMaxMin}>{getCurrentDay()}/{getCurrentMonth()}/{getCurrentYear()} </Text>
            <Image
                style={styles.tinyLogoWeather}
                source={getIcon()}/>
            <Text style={styles.textTempMaxMin}>{`${Math.floor(item.temp.max / 1)}\u2103`}</Text>
            <Text style={styles.textTempMaxMin}>{`${Math.floor(item.temp.min / 1)}\u2103`}</Text>
          </View>
    );
  };
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={{width: windowWidth, height: windowHeight}}>
        <ImageBackground
          source={require('../../assets/moreDetailScreen2.jpg')}
          style={{flex: 1, flexDirection: 'column'}}>
            <View style = {{flex: 1, marginTop: Platform.OS === 'ios' ? 35 : 0}}>
{/* ROW 1 */}
          <View style={styles.viewBackAndHome}>
            <TouchableOpacity
              onPress={() => navigation.navigate('DetailScreen')}>
              <Image
                style={styles.tinyLogo}
                source={require('../../assets/back.png')}/>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('HomeScreen')}>
              <Image
                style={styles.tinyLogo}
                source={require('../../assets/backHome.png')}/>
            </TouchableOpacity>
          </View>
{/* ROW 2 CITY NAME*/}
          <View style={styles.viewCity}>
            <Text style={styles.textCity}>{cityName}</Text>
          </View>
{/* ROW 3 STYLE 1*/}
          <View style={styles.viewContainerFlatList}>
              <FlatList
                  style={{flex:0.15}}
                  data={dataSource1}
                  horizontal={true}
                  renderItem={renderItem}
                  keyExtractor = {item=> `key=${item.dt}`}
              />
          </View>
{/* ROW 3 STYLE 2*/}
          <View style={{flex: 0.6}}>
              <View style={styles.viewTextMaxMin}>
                <Text style={[styles.textMaxMin, {flex: 0.2, paddingLeft: 50}]}>Date</Text>
                <Text style={[styles.textMaxMin, {flex: 0.25}]}>Weather</Text>
                <Text style={[styles.textMaxMin, {flex: 0.2}]}>Max</Text>
                <Text style={[styles.textMaxMin, {flex: 0.22}]}>Min</Text>
              </View>
              <FlatList
                  style={{flex: 0.6}}
                  data={dataSource}
                  renderItem={renderItem1}
                  keyExtractor = {item=> `key=${item.dt}`}
              />
          </View>
        </View>
        </ImageBackground>
      </View>
    </>
);
};
export default MoreDetailScreen2;
