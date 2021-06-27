/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  tinyLogo: {
    width: 30,
    height: 30,
  },
  tinyLogoWeather: {
    width: 30,
    height: 30,
  },
  tinyLogoWeather1: {
    width: 30,
    height: 30,
  },
  // ROW 1
  viewBackAndHome: {
    flex: 0.06,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  // ROW 2
  viewCity: {flex: 0.1, justifyContent: 'center', alignItems: 'center'},
  textCity: {fontSize: 30, color: '#fff', fontWeight: 'bold'},
  // ROW 3 STYLE 2
  viewTextMaxMin: {
    flex: 0.1,
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  viewFlatList: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginHorizontal: 4,
    marginVertical: 5,
  },
  textTempMaxMin: {fontSize: 17, color: '#fff', fontWeight: 'bold'},
  textMaxMin: {fontSize: 17, color: '#fff', fontWeight: 'bold'},
  //ROW 3 STYLE 1
  viewContainerFlatList: {
    flex: 0.15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: 'gray',
    borderBottomColor: 'gray',
    marginHorizontal: 4,
  },
  viewTextTemp: {
    height: '90%',
    width: 75,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gray',
    marginHorizontal: 5,
  },
  textTemp: {fontSize: 15, color: '#fff', fontWeight: 'bold'},
});
