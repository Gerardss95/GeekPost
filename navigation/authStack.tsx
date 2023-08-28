import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignUpScreen from '../screens/auth/SignUp';
import SignInScreen from '../screens/auth/SignIn';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, gestureEnabled: false }}
      >
        <Stack.Screen name='Sign In' component={SignInScreen} />
        <Stack.Screen name='Sign Up' component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
