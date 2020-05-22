import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ClinicsTopTabsNavigator from './ClinicsTopTabsNavigator';
import ClinicDetailStackNavigator from './ClinicDetailStackNavigator';

const StackNavigator = createStackNavigator();

function ClinicsStackNavigator() {

    return (
        <StackNavigator.Navigator
            screenOptions={{
                title: 'Clinics',
            }}
            initialRouteName="ClinicsTopTabsNavigator">

            <StackNavigator.Screen
                name="ClinicsTopTabsNavigator"
                component={ClinicsTopTabsNavigator}
            />

            <StackNavigator.Screen
                options={{
                    headerShown: true
                }}
                name="ClinicDetailStackNavigator"
                component={ClinicDetailStackNavigator}
            />

        </StackNavigator.Navigator>
    );
}

export default ClinicsStackNavigator;
