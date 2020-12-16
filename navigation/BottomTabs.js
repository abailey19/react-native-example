import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import InfoScreen from '../screens/InfoScreen';
import EndScreen from '../screens/EndScreen';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="HomeScreen"
            tabBarOptions={{
                inactiveBackgroundColor: '#397DA4',
                activeBackgroundColor: 'white',
                inactiveTintColor: 'white',
                activeTintColor: '#185C83',
                labelStyle: { fontSize: 13 },
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Info" component={InfoScreen} />
            <Tab.Screen name="Final" component={EndScreen} />
        </Tab.Navigator>
    );
};

export default BottomTabs;
