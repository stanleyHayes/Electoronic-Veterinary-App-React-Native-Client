import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import FeaturedClinicsScreen from '../screens/clinics/FeaturedClinicsScreen';
import NearbyClinicsScreen from '../screens/clinics/NearbyClinicsScreen';
import AllClinicsScreen from '../screens/clinics/AllClinicsScreen';

const TopTabsNavigator = createMaterialTopTabNavigator();

function ClinicsTopTabsNavigator() {
    return (
        <TopTabsNavigator.Navigator
            initialRouteName="NearbyClinicsScreen"
            backBehavior="initialScreen">

            <TopTabsNavigator.Screen
                options={{
                    title: "Featured"
                }}
                name="FeaturedClinicsScreen"
                component={FeaturedClinicsScreen}
            />

            <TopTabsNavigator.Screen
                options={{
                    title: "Nearby"
                }}
                name="NearbyClinicsScreen"
                component={NearbyClinicsScreen}
            />

            <TopTabsNavigator.Screen
                options={{
                    title: "Explore"
                }}
                name="AllClinicsScreen"
                component={AllClinicsScreen}
            />
        </TopTabsNavigator.Navigator>
    )
}

export default ClinicsTopTabsNavigator;
