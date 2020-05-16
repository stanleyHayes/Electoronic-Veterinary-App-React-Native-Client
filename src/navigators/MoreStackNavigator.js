import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';


import MoreScreen from '../screens/others/MoreScreen';
import ProfileStackNavigator from './ProfileStackNavigator';
import ChangePasswordScreen from '../screens/authentication/ChangePasswordScreen';
import TermsAndConditionsScreen from '../screens/others/TermsAndConditionsScreen';
import AboutScreen from '../screens/others/AboutEVetScreen';
import PetsStackNavigator from './PetsStackNavigator';
import HelpAndSupportScreen from '../screens/others/HelpAndSupportScreen';
import SettingsScreen from '../screens/others/SettingsScreen';
import MyShopsStackNavigator from './MyShopStackNavigator';

const StackNavigator = createStackNavigator();

function MoreStackNavigator() {
    return (
        <StackNavigator.Navigator
            initialRouteName="MoreScreen"
            screenOptions={{ headerShown: true}}>

            <StackNavigator.Screen
                name="MoreScreen"
                options={{
                    title: "More"
                }}
                component={MoreScreen}
            />

            <StackNavigator.Screen name="ProfileStackNavigator" component={ProfileStackNavigator} />
            <StackNavigator.Screen name="MyShopsStackNavigator" component={MyShopsStackNavigator} />
            <StackNavigator.Screen name="PetsStackNavigator" component={PetsStackNavigator} />
            <StackNavigator.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} />
            <StackNavigator.Screen name="AboutScreen" component={AboutScreen} />
            <StackNavigator.Screen name="TermsAndConditionsScreen" component={TermsAndConditionsScreen} />
            <StackNavigator.Screen name="HelpAndSupportScreen" component={HelpAndSupportScreen} />
            <StackNavigator.Screen name="SettingsScreen" component={SettingsScreen} />
        </StackNavigator.Navigator>
    )
}

export default MoreStackNavigator;
