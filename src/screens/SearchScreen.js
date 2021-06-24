/* eslint-disable no-shadow */
/* eslint-disable no-alert */
import React, {useState} from 'react';
import {
  Platform,
  Image,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  TextInput,
} from 'react-native';

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
      source={require('../assets/searchBackground.jpg')}
      style={styles.containerImageBackGround}>
      <View style={{flex: 1, marginTop: Platform.OS === 'ios' ? 35 : 0}}>
        {/* ROW 1 */}
        <View style={styles.containerTouchBack}>
          <TouchableOpacity onPress={() => navigate('HomeScreen')}>
            <Image
              style={styles.tinyLogo}
              source={require('../assets/back.png')}
            />
          </TouchableOpacity>
        </View>
        {/* ROW 2 */}
        <View>
          <Text
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 20,
              paddingHorizontal: 70,
            }}>
            Search other city weather
          </Text>
        </View>
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
                source={require('../assets/look.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};
export default SearchScreen;
////
const styles = StyleSheet.create({
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
