import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, Text } from 'react-native';
import { colors, fonts } from '../styles/GlobalStyles';
import TextDisplay from '../components/TextDisplay';

const MoreInfo1 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.title}>Screen 1</Text>
        <TextDisplay text="This is screen 1" order="1" />
        <TextDisplay text="React Native is fun!" order="2" />
        <TextDisplay text="Here is some more text" order="3" />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundBlue,
  },
  scrollView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
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

export default MoreInfo1;
