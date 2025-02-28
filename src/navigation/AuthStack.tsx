import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/Login/LoginScreen';
import OnbaordingScreen from '../screens/Onboarding/OnbaordingScreen';
import Signup from '../screens/Signup/SignupScreen';
import ForgotPasswordScreen from '../screens/ForgotPassword/ForgotPasswordScreen';

type MainStackParamList = {
  Login: undefined;
  OnbaordingScreen:undefined;
  Signup: undefined;
  Forgotpassword: undefined;
  // Add other screens and their parameters here if needed
};

const Stack = createNativeStackNavigator<MainStackParamList>();


const AuthStack = () => {
  return (
    <>
      <Stack.Screen name="OnbaordingScreen" component={OnbaordingScreen} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Forgotpassword" component={ForgotPasswordScreen} />
    </>
  )
}

export default AuthStack