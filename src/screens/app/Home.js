import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../../constants/colors';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home screen!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.purpledark,
    alignItems: 'center',
    color: colors.white,
    justifyContent: 'center',
  },
});