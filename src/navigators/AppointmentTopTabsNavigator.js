import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import AllAppointmentsScreen from '../screens/appointments/AllAppointmentsScreen';
import UpcomingAppointmentsScreen from '../screens/appointments/UpcomingAppointmentsScreen';

const TopTabsNavigator = createMaterialTopTabNavigator();

function AppointmentTopTabsNavigator() {
    return (
        <TopTabsNavigator.Navigator
            initialRouteName="UpcomingAppointmentsScreen"
            backBehavior="initialRoute">

            <TopTabsNavigator.Screen
                options={{
                    title: "Upcoming"
                }}
                name="UpcomingAppointmentsScreen"
                component={UpcomingAppointmentsScreen}
            />

            <TopTabsNavigator.Screen
                options={{
                    title: "All"
                }}
                name="AllAppointmentsScreen"
                component={AllAppointmentsScreen}
            />

        </TopTabsNavigator.Navigator>
    )
}

export default AppointmentTopTabsNavigator;
