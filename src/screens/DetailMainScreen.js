/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  ImageBackground,
  useWindowDimensions,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
const DetailMainScreen = ({navigation}) => {
  const [textCity, setTextCity] = useState('');
  const [dataSource, setDataSource] = useState('');
  const {width: windowWidth, height: windowHeight} = useWindowDimensions();
  useEffect(() => {
    async function fetchData() {
      try {
        const requestUrl = 'https://pro.openweathermap.org/data/2.5/forecast/daily?q=Saigon&cnt=7&appid=e6da80eb2a72709285a540c26f7feb2e&units=metric';
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        const data = responseJSON;
        setTextCity(data.city.name);
        setDataSource(data.list);
      } catch (error) {
        console.log('fail...', error.message);
      }
    }
    fetchData();
  }, []);
  const renderItem = ({item})=>{
    function getCurrentDay(){
      const dataDateMonth = new Date((item.dt) * 1000);
      const date = dataDateMonth.getDate();
      return date;
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
        return require('../assets/clouds.png');
      } else if (item.weather[0].main === 'Rain'){
        return require('../assets/rain.png');
      } else if(item.weather[0].main === 'Clear'){
        return require('../assets/sun.png');
      } else if(item.weather[0].main === 'Dust'){
        return require('../assets/dust.png');
      } else{
        return require('../assets/haze.png');
      };
    }
    return (
          <View style={styles.viewFlatList}>
            <Text style={styles.textTempMaxMin}>{getCurrentDay()}/{getCurrentMonth()}/{getCurrentYear()}</Text>
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
{/* ROW 3 */}
          <View style={{flex: 0.8}}>
            <View style={styles.viewTextMaxMin}>
              <Text style={[styles.textMaxMin, {flex: 0.2, paddingLeft: 40}]}>Date</Text>
              <Text style={[styles.textMaxMin, {flex: 0.25}]}>Weather</Text>
              <Text style={[styles.textMaxMin, {flex: 0.2,paddingLeft: 5}]}>Max</Text>
              <Text style={[styles.textMaxMin, {flex: 0.22,paddingLeft: 5}]}>Min</Text>
            </View>
            <FlatList
                style={{flex: 0.75}}
                data={dataSource}
                renderItem={renderItem}
                keyExtractor = {item=> `key=${item.dt}`}
            />
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
    flex: 0.06,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop:10,
  },
// ROW 2
  viewCity:{flex: 0.09, justifyContent: 'center', alignItems: 'center'},
  textCity:{fontSize: 30, color: '#fff', fontWeight: 'bold'},
// ROW 3
  viewTextMaxMin:{
    flex:0.1,
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems: 'center'},
  viewFlatList:{
    height:50,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-evenly',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginHorizontal: 4,
    marginVertical:5},
  textTempMaxMin:{fontSize: 17, color: '#fff', fontWeight: 'bold'},
  textMaxMin:{fontSize: 17, color: '#fff', fontWeight: 'bold', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'},
  tinyLogoWeather: {
    width: 30,
    height: 30,
  },
});
