import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from '../screens/authentication/SignInScreen';
import ForgotPasswordScreen from '../screens/authentication/ForgotPasswordScreen';

const StackNavigator = createStackNavigator();

function AuthenticationStackNavigator() {
    return (
        <StackNavigator.Navigator initialRouteName="SignInScreen" screenOptions={{ headerShown: false}}>
            <StackNavigator.Screen name="SignInScreen" component={SignInScreen} />
            <StackNavigator.Screen name="SignUpScreen" component={SignInScreen} />
            <StackNavigator.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
        </StackNavigator.Navigator>
    )
}

export default AuthenticationStackNavigator;
