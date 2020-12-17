import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import InfoScreen from '../screens/InfoScreen';
import MoreInfo1 from '../screens/MoreInfo1';
import MoreInfo2 from '../screens/MoreInfo2';
import MoreInfo3 from '../screens/MoreInfo3';
import MoreInfo4 from '../screens/MoreInfo4';

import { colors } from '../styles/GlobalStyles';

const Stack = createStackNavigator();

const InfoStack = () => {
  return (
    <Stack.Navigator 
        initialRouteName="Information"
        screenOptions={{
            headerStyle: { backgroundColor: colors.navBlue },
            headerTintColor: 'white',
        }}
    >
        <Stack.Screen
            name="Information"
            component={InfoScreen}
        />
        <Stack.Screen
            name="MoreInfo1"
            component={MoreInfo1}
            options={{
                title: "More Info",
                headerBackTitleVisible: false,
            }}
        />
        <Stack.Screen
            name="MoreInfo2"
            component={MoreInfo2}
            options={{
                title: "Even More Info",
                headerBackTitleVisible: false,
            }}
        />
        <Stack.Screen
            name="MoreInfo3"
            component={MoreInfo3}
            options={{
                title: "Still More Info",
                headerBackTitleVisible: false,
            }}
        />
        <Stack.Screen
            name="MoreInfo4"
            component={MoreInfo4}
            options={{
                title: "Wow More Info",
                headerBackTitleVisible: false,
            }}
        />
    </Stack.Navigator>
  );
};

export default InfoStack;
