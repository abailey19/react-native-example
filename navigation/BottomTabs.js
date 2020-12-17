import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import InfoStack from '../navigation/InfoStack';
import EndScreen from '../screens/EndScreen';

import { colors } from '../styles/GlobalStyles';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="HomeScreen"
            tabBarOptions={{
                inactiveBackgroundColor: colors.navBlue,
                activeBackgroundColor: 'white',
                inactiveTintColor: 'white',
                activeTintColor: colors.navBlue,
                labelStyle: { fontSize: 16, marginBottom: 5 },
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Info" component={InfoStack} />
            <Tab.Screen name="Final" component={EndScreen} />
        </Tab.Navigator>
    );
};

export default BottomTabs;
