import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ClinicDetailsTopTabsNavigator from './ClinicDetailTopTabNavigator';
import ClinicsTopTabsNavigator from './ClinicsTopTabsNavigator';

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
                name="ClinicDetailsTopTabsNavigator"
                component={ClinicDetailsTopTabsNavigator}/>
        </StackNavigator.Navigator>
    );
}

export default ClinicsStackNavigator;
