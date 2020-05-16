import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import AppointmentStackNavigator from './AppointmentStackNavigator';
import ClinicsStackNavigator from './ClinicsStackNavigator';
import MoreStackNavigator from './MoreStackNavigator';
import ForumStackNavigator from './ForumStackNavigator';
import ShopsStackNavigator from './ShopsStackNavigator';
import {Icon} from "native-base";

const BottomTabs = createMaterialBottomTabNavigator();

function MainBottomTabsNavigator() {
    return (
        <BottomTabs.Navigator
            shifting={true}
            activeColor="black"
            inactiveColor="#cccccc"
            barStyle={{
                backgroundColor: "white"
            }}
            initialRouteName="AppointmentStackNavigator"
            initialRoute="AppointmentStackNavigator">

            <BottomTabs.Screen
                options={{
                    title: "Calendar",
                    tabBarIcon: function ({focused, color}) {
                        return <Icon type="MaterialCommunityIcons" name="calendar" color={color} />
                    }
                }}
                name="AppointmentStackNavigator"
                component={AppointmentStackNavigator} />

            <BottomTabs.Screen
                options={{
                    title: "Clinics",
                    tabBarIcon: function ({focused, color}) {
                        return <Icon type="MaterialIcons" name="local-hospital" color={color} />
                    }
                }}
                name="ClinicsStackNavigator"
                component={ClinicsStackNavigator}
            />

            <BottomTabs.Screen
                name="ShopsStackNavigator"
                component={ShopsStackNavigator}
                options={{
                    title: "Shop",
                    tabBarIcon: function ({focused, color}) {
                        return <Icon type="MaterialIcons" name="shopping-cart" color={color} />
                    }
                }}
            />

            <BottomTabs.Screen
                name="ForumStackNavigator"
                component={ForumStackNavigator}
                options={{
                    title: "Forum",
                    tabBarIcon: function ({focused, color}) {
                        return <Icon type="MaterialIcons" name="forum" color={color} />
                    }
                }}
            />

            <BottomTabs.Screen
                name="MoreStackNavigator"
                component={MoreStackNavigator}
                options={{
                    title: "More",
                    tabBarIcon: function ({focused, color}) {
                        return <Icon type="MaterialIcons" name="more-horiz" color={color} />
                    }
                }}
            />
        </BottomTabs.Navigator>
    )
}

export default MainBottomTabsNavigator;
