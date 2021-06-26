/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View} from 'react-native';
import Navigator from './src/Navigators';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Navigator />
      </View>
    );
  }
}
