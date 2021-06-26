/* eslint-disable prettier/prettier */
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  normalDot: {
    height: 5,
    width: 5,
    borderRadius: 5,
    marginHorizontal: 4,
    backgroundColor: '#fff',
  },
  indicatorWrapper: {
    flexDirection: 'row',
    position: 'absolute',
    top: 160,
    left: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topInfoWrapper: {
    flex: 1,
    marginTop: 160,
    justifyContent: 'space-between',
  },
  topHeaderIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  city: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  time: {
    color: '#fff',
    fontWeight: 'bold',
  },
  temperature: {
    color: '#fff',
    fontSize: 85,
  },
  textWeather: {
    color: '#fff',
    fontSize: 25,
    lineHeight: 34,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  bottomInfoWrapper: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'space-between',
  },
  infoText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
  infoBar: {
    width: 45,
    height: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    // borderRadius: 5,
  },
  tinyLogo: {
    width: 30,
    height: 30,
  },
  tinyLogoWeather: {
    width: 50,
    height: 50,
  },
  tinyLogo1: {
    width: 30,
    height: 35,
  },
  appHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    position: 'absolute',
    paddingHorizontal: 20,
    top: 0,
    width: '100%',
    height: getStatusBarHeight() + 40,
  },
});
