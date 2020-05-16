import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import ClinicInformationScreen from '../screens/clinics/ClinicInformationScreen';
import ClinicGalleryScreen from '../screens/clinics/ClinicGalleryScreen';
import ClinicReviewScreen from '../screens/clinics/ClinicReviewsScreen';

const TopTabsNavigator = createMaterialTopTabNavigator();

function ClinicDetailsTopTabsNavigator() {
    return (
        <TopTabsNavigator.Navigator>
            <TopTabsNavigator.Screen
                options={{
                    title: 'Info',
                }}
                name="ClinicInformationScreen"
                component={ClinicInformationScreen}
            />

            <TopTabsNavigator.Screen
                name="ClinicGalleryScreen"
                options={{
                    title: 'Gallery',
                }}
                component={ClinicGalleryScreen}
            />

            <TopTabsNavigator.Screen
                options={{
                    title: "Reviews"
                }}
                name="ClinicReviewScreen"
                component={ClinicReviewScreen}
            />
        </TopTabsNavigator.Navigator>
    );
}

export default ClinicDetailsTopTabsNavigator;
