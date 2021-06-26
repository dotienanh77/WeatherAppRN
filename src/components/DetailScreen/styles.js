/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  tinyLogo: {
    width: 30,
    height: 30,
  },
  tinyLogo1: {
    width: 30,
    height: 35,
  },
  tinyLogoWeather: {
    width: 30,
    height: 30,
  },
  // ROW 1
  viewBackAndHome: {
    flex: 0.07,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  // ROW 2
  viewCity: {flex: 0.1, justifyContent: 'center', alignItems: 'center'},
  textCity: {fontSize: 40, color: '#fff', fontWeight: 'bold'},
  // ROW 3
  viewTemp: {flex: 0.15, flexDirection: 'row'},
  viewTemp1: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTemp1: {color: '#fff', fontSize: 70},
  viewState: {
    flex: 0.4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textState: {color: '#fff', fontSize: 25},
  // ROW 4
  viewTemp2: {flex: 0.08, flexDirection: 'row'},
  viewTempMaxMin: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTempMaxMin: {fontSize: 15, color: '#fff', fontWeight: 'bold'},
  // ROW 5
  viewHumidity: {
    flex: 0.1,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginHorizontal: 4,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textHumidity1: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  textHumidity2: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  // ROW 6
  viewPressure: {
    flex: 0.1,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginHorizontal: 4,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textPressure1: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  textPressure2: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  // ROW 7
  viewWind1: {flex: 0.05, justifyContent: 'center', alignItems: 'center'},
  textWind1: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  viewWind2: {
    flex: 0.08,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginHorizontal: 4,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  viewWind3: {justifyContent: 'center', alignItems: 'center'},
  textWind2: {
    fontSize: 13,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  textWind3: {
    fontSize: 17,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  textRemind: {color: '#fff', marginTop: 10, marginHorizontal: 10},
});
