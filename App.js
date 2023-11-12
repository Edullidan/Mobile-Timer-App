import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';
import Timers from './src/Timer';


export default function App() {
  return (
    <View style={styles.container}>
           <Timers></Timers>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7986cb',
  
  },
});
