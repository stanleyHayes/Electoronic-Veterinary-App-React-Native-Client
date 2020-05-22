import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ClinicStaffScreen from '../screens/clinics/ClinicStaffScreen';
import ClinicStaffDetailScreen from '../screens/clinics/ClinicStaffDetailScreen';

const StackNavigator = createStackNavigator();

function ClinicStaffStackNavigator() {

    return (
        <StackNavigator.Navigator
            screenOptions={{
                title: 'Clinic Staff',
            }}
            initialRouteName="ClinicStaffScreen">

            <StackNavigator.Screen
                name="ClinicStaffScreen"
                component={ClinicStaffScreen}
            />

            <StackNavigator.Screen
                options={{
                    title: "Shop Products"
                }}
                name="ClinicStaffDetailScreen"
                component={ClinicStaffDetailScreen}
            />

        </StackNavigator.Navigator>
    );
}

export default ClinicStaffStackNavigator;
