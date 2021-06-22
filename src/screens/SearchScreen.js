/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Platform,KeyboardAvoidingView,SafeAreaView,Text, View, TouchableOpacity, StyleSheet, Button,ImageBackground,TextInput,ScrollView} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import MenuIcon from '../assets/menu.svg';
import SearchIcon from '../assets/search.svg';

const SearchScreen = ({ navigation: { navigate } })=> {
  const image = { uri: "https://www.dungplus.com/wp-content/uploads/2019/10/anh-avatar-dep-nhat.jpg" }; 
  const [textVn, setTextVn] = useState("");
  ////
  const SearchButton = (textVn) => {
    if (textVn.length <= 0 ) {
      alert('Please Enter Information!');
      return;
    }else{
      return navigate('DetailScreen', {textVn:[textVn]});
    }
  };
  ////
  return (
    // <SafeAreaView style={{flex:1}}>
       <ImageBackground source={image} style={styles.containerImageBackGround}>
  {/* ROW 1 */}
          <View style = {styles.containerTouchBack}>
            <TouchableOpacity
                  onPress={() => navigate('WeatherApp')}
                  style={styles.TouchBack}>
                  <Text style={styles.textStyleBack}>Back</Text>
            </TouchableOpacity>
          </View>
  {/* ROW 2 */}
          <View style={styles.containerTextInput}>
            <TextInput 
              onChangeText ={setTextVn}
              placeholder= "Province/City Enter" style={styles.textInput} />
          </View>
  {/* ROW 3 */}
          <View style={styles.containerTouchSearch}> 
              <TouchableOpacity           
                onPress={() => SearchButton(textVn)}            
                style={styles.TouchSearch}>
                <Text style={styles.textStyleSearch}>Search</Text>
              </TouchableOpacity>
          </View>
        </ImageBackground>
    //  </SafeAreaView>
  );
};
export default SearchScreen;
const styles = StyleSheet.create({
  containerImageBackGround : {flex: 1, resizeMode: "cover"},
//// Row 1
  containerTouchBack:{flex:0.1,flexDirection:'row'},
  TouchBack: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginHorizontal:5,
    marginVertical:5,
  },
  textStyleBack: {fontSize: 15, fontWeight: '500', color: 'black'},
//// Row 2
  containerTextInput: {
    flex : 0.1,
    marginTop: 5,
  },
  textInput: {
    borderWidth: 2,
    borderRadius: 5,
    marginVertical:5,
    marginHorizontal: 5,
    height: 45,
    fontSize: 15,
    paddingLeft: 10,
  },
//// Row 3
  containerTouchSearch: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  TouchSearch: {
    height:50,
    width: "40%",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    borderRadius: 10,
  },
  textStyleSearch: {fontSize: 15, fontWeight: '500', color: 'black'},
},
);
