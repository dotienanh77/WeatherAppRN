/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Platform,
  StatusBar,
  Image,
  ImageBackground,
  useWindowDimensions,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
const MoreDetailScreen2 = ({navigation, route}) => {
  const cityName = route.params.text[0];
  const {width: windowWidth, height: windowHeight} = useWindowDimensions();
  const [dataSource, setDataSource] = useState('');
  useEffect(() => {
    async function fetchData() {
      try {
        const requestUrl = `https://pro.openweathermap.org/data/2.5/forecast/daily?q=${cityName}&cnt=7&appid=e6da80eb2a72709285a540c26f7feb2e&units=metric`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        const data = responseJSON;
        setDataSource(data.list);
      } catch (error) {
        console.log('fail...', error.message);
      }
    }
    fetchData();
  }, []);

  const renderItem =({item})=>{
    function getIcon(){
      if (item.weather[0].main === 'Clouds'){
        return require('../assets/clouds.png');
      }else if (item.weather[0].main=== 'Rain'){
        return require('../assets/rain.png');
      }else{
        return require('../assets/sun.png');
      };
    }
    return (   
          <View style={styles.viewFlatList}>
            <Text style={styles.textTempMaxMin}>Date</Text>
            <Image
                style={styles.tinyLogoWeather}
                source={getIcon()}/>
            <Text style={styles.textTempMaxMin}>{`${Math.floor(item.temp.max / 1)}\u2103`}</Text>
            <Text style={styles.textTempMaxMin}>{`${Math.floor(item.temp.min / 1)}\u2103`}</Text>
          </View>
    )
  }
  return (
    <> 
      <StatusBar barStyle="light-content" />
      <View style={{width: windowWidth, height: windowHeight}}>
        <ImageBackground
          source={require('../assets/moreDetailScreen2.jpg')}
          style={{flex: 1, flexDirection: 'column'}}>
            <View style = {{flex: 1, marginTop: Platform.OS === 'ios' ? 35 : 0}}>
{/* ROW 1 */}
          <View style={styles.viewBackAndHome}>
            <TouchableOpacity
              onPress={() => navigation.navigate('DetailScreen')}>
              <Image
                style={styles.tinyLogo}
                source={require('../assets/back.png')}/>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('HomeScreen')}>
              <Image
                style={styles.tinyLogo}
                source={require('../assets/backHome.png')}/>
            </TouchableOpacity>
          </View>
{/* ROW 2 CITY NAME*/}
<View style={styles.viewCity}>
            <Text style={styles.textCity}>{cityName}</Text>
          </View>
{/* ROW 3 */}
          <View style={{flex: 0.8}}>
            <View style={styles.viewTextMaxMin}>
              <Text style={styles.textMaxMin}>Date</Text>
              <Text style={styles.textMaxMin}>Weather</Text>
              <Text style={styles.textMaxMin}>Max</Text>
              <Text style={styles.textMaxMin}>Min</Text>
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
export default MoreDetailScreen2;
const styles = StyleSheet.create({
  tinyLogo: {
    width: 30,
    height: 30,
  },
  tinyLogoWeather: {
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
  textMaxMin:{fontSize: 17, color: '#fff', fontWeight: 'bold'},
});