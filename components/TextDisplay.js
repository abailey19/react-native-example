import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { colors, fonts, dimensions } from '../styles/GlobalStyles';

const TextDisplay = ({ text, order }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>{`Message #${order}`}</Text>
        <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.displayWhite,
    justifyContent: 'center',
    width: dimensions.screenWidth * 0.8,
    height: 100,
    marginTop: 20,
    marginBottom: 20,
  },
  text: {
    fontSize: fonts.text,
    color: colors.textGrey,
    textAlign: 'center',
  },
});

export default TextDisplay;
