import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CounterApp from './counter'
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Yeyang class 2cw1</Text>
      <StatusBar style="auto" />
      <CounterApp></CounterApp>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
