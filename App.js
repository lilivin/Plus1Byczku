import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Auctions from './components/auctions.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Auctions />
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
