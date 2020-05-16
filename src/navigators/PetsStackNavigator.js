import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import PetsScreen from '../screens/pets/PetsScreen';
import PetDetailTopTabsNavigator from './PetDetailTopTabsNavigator';
import NewPetScreen from '../screens/pets/NewPetScreen';

const StackNavigator = createStackNavigator();

function PetsStackNavigator() {
    return (
        <StackNavigator.Navigator initialRouteName="PetsScreen" screenOptions={{ headerShown: false}}>
            <StackNavigator.Screen name="PetsScreen" component={PetsScreen} />
            <StackNavigator.Screen name="PetDetailTopTabsNavigator" component={PetDetailTopTabsNavigator} />
            <StackNavigator.Screen name="NewPetScreen" component={NewPetScreen} />
        </StackNavigator.Navigator>
    )
}

export default PetsStackNavigator;
