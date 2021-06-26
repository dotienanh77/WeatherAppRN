/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-shadow */
/* eslint-disable no-alert */
import React, {useState} from 'react';
import {
  Platform,
  Image,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from 'react-native';
import {styles} from './styles';
const SearchScreen = ({navigation: {navigate}}) => {
  const [textVn, setTextVn] = useState('');
  const SearchButton = textVn => {
    if (textVn.length <= 0) {
      alert('Please Enter Information!');
      return;
    } else {
      return navigate('DetailScreen', {textVn: [textVn]});
    }
  };
  return (
    <ImageBackground
      source={require('../../assets/searchBackground.jpg')}
      style={styles.containerImageBackGround}>
      <View style={{flex: 1, marginTop: Platform.OS === 'ios' ? 35 : 0}}>
        {/* ROW 1 */}
        <View style={styles.containerTouchBack}>
          <TouchableOpacity onPress={() => navigate('HomeScreen')}>
            <Image
              style={styles.tinyLogo}
              source={require('../../assets/back.png')}
            />
          </TouchableOpacity>
        </View>
        {/* ROW 2 */}
        <View style={styles.containerHeader}>
          <Text style={styles.textHeader}>Search Other City Weather</Text>
        </View>
        {/* ROW 3 */}
        <View style={styles.containerTextInput}>
          <View style={{flex: 0.8}}>
            <TextInput
              onChangeText={setTextVn}
              placeholder="City Enter (Ex:Hanoi...)."
              style={styles.textInput}
            />
          </View>
          <View style={{flex: 0.2}}>
            <TouchableOpacity
              onPress={() => SearchButton(textVn)}
              style={styles.TouchSearch}>
              <Image
                style={styles.tinyLogo}
                source={require('../../assets/look.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};
export default SearchScreen;
