import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import NewPost from '../screens/NewPost';
import OnePost from '../screens/OnePost';

const Stack = createStackNavigator();

export default function UserStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, gestureEnabled: false }}
      >
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='NewPost' component={NewPost} />
        <Stack.Screen name='OnePost' component={OnePost} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
