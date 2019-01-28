/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import Home from './src/Screens/Home';
import Login from './src/Screens/Login';
import Detail from './src/Screens/Detail';
import AddUser from './src/Screens/AddUser';
import { Provider } from 'react-redux';
import Store from './src/Store';

const HomeStack = createStackNavigator({
  HomeScreen: { screen: Home },
  DetailsScreen: { screen: Detail },
  AddUserScreen: { screen: AddUser }
},{
  initialRouteName: 'HomeScreen'
})

const LoginStack = createStackNavigator({
  LoginScreen: { screen: Login },
},{
  initialRouteName: 'LoginScreen'
})

const AppSwitchNavigator = createSwitchNavigator({
  Login: LoginStack,
  Home: HomeStack
})

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppSwitchNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
