import React from 'react';
import { View, StyleSheet } from 'react-native';
import HomePageResidente from './components/HomeResidente/HomePageResidente';

export default function App() {
  return (
    <View style={styles.container}>
      <HomePageResidente />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});