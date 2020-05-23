import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ClinicGalleryScreen from '../screens/clinics/ClinicGalleryScreen';
import ClinicReviewScreen from '../screens/clinics/ClinicReviewsScreen';
import ClinicFacilitiesScreen from '../screens/clinics/ClinicFacilitiesScreen';
import ClinicInformationScreen from '../screens/clinics/ClinicInformationScreen';
import ClinicStaffStackNavigator from './ClinicStaffStackNavigator';

const StackNavigator = createStackNavigator();

function ClinicDetailStackNavigator() {

    return (
        <StackNavigator.Navigator
            screenOptions={{
                title: 'Clinics',
                headerShown: false
            }}
            initialRouteName="ClinicInformationScreen">

            <StackNavigator.Screen
                name="ClinicInformationScreen"
                component={ClinicInformationScreen}
            />


            <StackNavigator.Screen
                name="ClinicGalleryScreen"
                component={ClinicGalleryScreen}
            />

            <StackNavigator.Screen
                name="ClinicStaffStackNavigator"
                component={ClinicStaffStackNavigator}
            />

            <StackNavigator.Screen
                name="ClinicReviewScreen"
                component={ClinicReviewScreen}
            />

            <StackNavigator.Screen
                name="ClinicFacilitiesScreen"
                component={ClinicFacilitiesScreen}
            />

        </StackNavigator.Navigator>
    );
}

export default ClinicDetailStackNavigator;
