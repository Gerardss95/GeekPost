import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import { signOutUser } from '../services/helpers';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home screen!</Text>
      <StatusBar style='auto' />
      <Button onPress={signOutUser} text='Logout' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
