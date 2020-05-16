import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import PetInfoScreen from '../screens/pets/PetInfoScreen';
import PetGalleryScreen from '../screens/pets/PetGalleryScreen';
import PetMedicalHistoryScreen from '../screens/pets/PetMedicalHistoryScreen';

const TopTabsNavigator = createMaterialTopTabNavigator();

function PetDetailTopTabsNavigator() {
    return (
        <TopTabsNavigator.Navigator>
            <TopTabsNavigator.Screen name="PetInfoScreen" component={PetInfoScreen} />
            <TopTabsNavigator.Screen name="PetGalleryScreen" component={PetGalleryScreen} />
            <TopTabsNavigator.Screen name="PetMedicalHistoryScreen" component={PetMedicalHistoryScreen} />
        </TopTabsNavigator.Navigator>
    )
}

export default PetDetailTopTabsNavigator;
