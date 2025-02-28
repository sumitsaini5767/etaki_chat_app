import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/Home/HomeScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Account from '../screens/Account/Account';
import Settings from '../screens/Settings/Settings';

type MainStackParamList = {
    Home: undefined;
    Account: undefined;
    Settings:  undefined;
    // Add other screens and their parameters here if needed
  };


  const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStack = () => {
  return (
    <>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Settings" component={Settings} />
    </>
  )
}

export default MainStack

const styles = StyleSheet.create({})