import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';


import MainBottomTabsNavigator from './MainBottomTabsNavigator';
import AuthenticationStackNavigator from './AuthenticationStackNavigator';

const StackNavigator = createStackNavigator();

function RootStackNavigator() {
    return (
        <StackNavigator.Navigator initialRouteName="M" screenOptions={{ headerShown: false}}>
            <StackNavigator.Screen name="MainBottomTabsNavigator" component={MainBottomTabsNavigator} />
            <StackNavigator.Screen name="AuthenticationStackNavigator" component={AuthenticationStackNavigator} />
        </StackNavigator.Navigator>
    )
}

export default RootStackNavigator;
