/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerImageBackGround: {flex: 1, resizeMode: 'cover'},
  //// Row 1
  containerTouchBack: {
    flex: 0.1,
    flexDirection: 'row',
    marginVertical: 10,
    marginLeft: 10,
  },
  TouchBack: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  tinyLogo: {
    width: 30,
    height: 30,
  },
  //// Row 2
  containerHeader:{flex:0.1,justifyContent: 'center', alignItems: 'center'},
  textHeader:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  //// Row 3
  containerTextInput: {
    flex: 0.1,
    flexDirection: 'row',
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 5,
    marginLeft: 5,
    height: 45,
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  TouchSearch: {
    height: 45,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 5,
  },
});
