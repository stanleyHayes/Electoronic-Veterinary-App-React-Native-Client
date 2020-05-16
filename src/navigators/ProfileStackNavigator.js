import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ProfileScreen from '../screens/profile/ProfileScreen';
import EditProfileScreen from '../screens/profile/EditProfileScreen';

const StackNavigator = createStackNavigator();

function ProfileStackNavigator() {
    return (
        <StackNavigator.Navigator initialRouteName="ProfileScreen" screenOptions={{ headerShown: false}}>
            <StackNavigator.Screen name="ProfileScreen" component={ProfileScreen} />
            <StackNavigator.Screen name="EditProfileScreen" component={EditProfileScreen} />
        </StackNavigator.Navigator>
    )
}

export default ProfileStackNavigator;
