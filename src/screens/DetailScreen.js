/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Button,ImageBackground,TextInput} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import MenuIcon from '../assets/menu.svg';
import SearchIcon from '../assets/search.svg';
const DetailScreen = ({navigation}) => {
  const image = { uri: "https://www.dungplus.com/wp-content/uploads/2019/10/anh-avatar-dep-nhat.jpg" }; 
  const [textVn, setTextVn] = useState("");
  return (
    <ImageBackground source={image} style={{ flex: 1,flexDirection:'column', resizeMode: "cover", justifyContent: "flex-start"}}>
         <View style={styles.container2}>
              <View style={styles.containerTextInput}>
                <TextInput 
                  onChangeText ={setTextVn}
                  placeholder= "Province/City Enter" style={styles.textInput} />
              </View>
              <View style={styles.containerTouchSearch}> 
                <TouchableOpacity
                  onPress={() => navigation.navigate('Weather App')}
                  style={styles.TouchSearch}>
                  <Text style={styles.textStyleSearch}>Tìm</Text>
                </TouchableOpacity>
              </View>
          </View>
      </ImageBackground>
//
      // <ImageBackground source={image} style={{ flex: 1,flexDirection:'column', resizeMode: "cover", justifyContent: "flex-start"}}>
      // <View style={styles.container2}>
      //     <View style={styles.containerTextInput}>
      //       <TextInput 
      //         onChangeText ={setTextVn}
      //         placeholder= "Province/City Enter" style={styles.textInput} />
      //     </View>
      //     <View style={styles.containerTouchSearch}> 
      //       <TouchableOpacity
      //         onPress={() => navigate('Detail', {textVn:[textVn]})}
      //         style={styles.TouchSearch}>
      //         <Text style={styles.textStyleSearch}>Tìm</Text>
      //       </TouchableOpacity>
      //     </View>
      // </View>
      // </ImageBackground>
  );
};
export default DetailScreen;
const styles = StyleSheet.create({
  container2: {flex: 0.1, flexDirection: 'row', justifyContent: 'center'},
  containerTouchSearch: {
    flex: 0.2,
    alignItems: 'center',
    marginTop: 5,
  },
  containerTextInput: {
    flex : 0.8,
    marginTop: 5,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 5,
    height: 40,
    fontSize: 15,
    paddingHorizontal: 5,
  },
  TouchSearch: {
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 100,
  },
  textStyleSearch: {fontSize: 15, fontWeight: '500', color: 'black'},
});