import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/HomeScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import MainStack from './MainStack';
import AuthStack from './AuthStack';

type MainStackParamList = {
    
    // Add other screens and their parameters here if needed
  };


const Stack = createNativeStackNavigator<MainStackParamList>();


const Routes = () => {
const [token, setToken] = useState<boolean>(false);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {
                    token? MainStack() : AuthStack()

                }
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default Routes