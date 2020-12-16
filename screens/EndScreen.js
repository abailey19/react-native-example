import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { colors, fonts } from '../styles/GlobalStyles';

const EndScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>That's all folks!</Text>
        <Text style={styles.text}>Hope you enjoyed!</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundBlue,
    justifyContent: 'center',
  },
  title: {
    fontSize: fonts.header,
    fontWeight: '600',
    color: colors.textGrey,
    textAlign: 'center',
  },
  text: {
    fontSize: fonts.text,
    color: colors.textGrey,
    textAlign: 'center',
  },
});

export default EndScreen;
