import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, Text } from 'react-native';
import { colors, fonts } from '../styles/GlobalStyles';
import TextDisplay from '../components/TextDisplay';

const MoreInfo4 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.title}>Screen 4</Text>
        <TextDisplay text="This is screen 4" order="1" />
        <TextDisplay text="Wow! Here's more text." order="2" />
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

export default MoreInfo4;
