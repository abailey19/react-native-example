import { Dimensions } from 'react-native';

export const dimensions = {
  screenHeight: Dimensions.get('window').height,
  screenWidth: Dimensions.get('window').width,
};

export const colors = {
  backgroundBlue: '#ADD8E6',
  textGrey: '#404C52',
  displayWhite: '#FFFFFF',
  navBlue: '#397DA4',
  buttonBlue: '#E0F5FB'
};

export const fonts = {
  header: 30,
  text: 20,
};
