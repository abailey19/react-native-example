import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import { colors, fonts, dimensions } from '../styles/GlobalStyles';

const Info = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.title}>Stack Navigator Time!</Text>
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('MoreInfo1')}
        >
            <Text style={styles.text}>More Info</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('MoreInfo2')}
        >
            <Text style={styles.text}>Even More Info</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('MoreInfo3')}
        >
            <Text style={styles.text}>Still More Info</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('MoreInfo4')}
        >
            <Text style={styles.text}>Wow More Info</Text>
        </TouchableOpacity>
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
  button: {
    backgroundColor: colors.buttonBlue,
    justifyContent: 'center',
    width: dimensions.screenWidth * 0.8,
    height: 120,
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.navBlue,
  },
});

export default Info;
