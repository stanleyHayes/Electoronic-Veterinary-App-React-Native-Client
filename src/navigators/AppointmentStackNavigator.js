import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';


import AppointmentTopTabsNavigator from './AppointmentTopTabsNavigator';
import AppointmentDetailScreen from '../screens/appointments/AppointmentDetailScreen';

const StackNavigator = createStackNavigator();

function AppointmentStackNavigator() {
    return (
        <StackNavigator.Navigator
            initialRouteName="AppointmentTopTabsNavigator"
            backBehavior="initialRoute">

            <StackNavigator.Screen
                options={{
                    title: "Appointments"
                }}
                name="AppointmentTopTabsNavigator"
                component={AppointmentTopTabsNavigator}
            />

            <StackNavigator.Screen
                options={{
                    title: "Detail"
                }}
                name="AppointmentDetailScreen"
                component={AppointmentDetailScreen}
            />

        </StackNavigator.Navigator>
    )
}

export default AppointmentStackNavigator;
