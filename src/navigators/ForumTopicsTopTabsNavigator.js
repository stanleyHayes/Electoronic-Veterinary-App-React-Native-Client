import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import AllTopicsScreen from '../screens/forum/AllTopicsScreen';
import MyTopicsScreen from '../screens/forum/MyTopicsScreen';
import RecentTopicsScreen from '../screens/forum/RecentTopicsScreen';
import InterestedTopicsScreen from '../screens/forum/InterestedTopicsScreen';
import {Icon} from "native-base";

import {StyleSheet} from 'react-native';

const TopTabsNavigator = createMaterialTopTabNavigator();

function ForumTopicsTopTabsNavigator() {
    return (
        <TopTabsNavigator.Navigator
            removeClippedSubviews={true}
            initialRouteName="RecentTopicsScreen"
            tabBarOptions={{
                showIcon: true,
                showLabel: false
            }}>

            <TopTabsNavigator.Screen
                options={{
                    title: "",
                    tabBarIcon: function ({color, focused}) {
                        return (focused) ?
                            <Icon style={styles.icon} type="MaterialIcons" name="favorite"  color={color}/> :
                            <Icon style={styles.icon} name="favorite-border" type="MaterialIcons" color={color} />
                    }
                }}
                name="InterestedTopicsScreen"
                component={InterestedTopicsScreen}
            />

            <TopTabsNavigator.Screen
                options={{
                    tabBarIcon: function ({color, focused}) {
                        return (focused) ?
                            <Icon style={styles.icon} type="MaterialIcons" name="favorite" color={color} /> :
                            <Icon style={styles.icon} name="favorite-border" type="MaterialIcons" color={color} />
                    }
                }}
                name="RecentTopicsScreen"
                component={RecentTopicsScreen}
            />

            <TopTabsNavigator.Screen
                options={{
                    title: "Topics",
                    tabBarIcon: function ({color, focused}) {
                        return (focused) ?
                            <Icon style={styles.icon} type="MaterialIcons" name="favorite" color={color} /> :
                            <Icon style={styles.icon} name="favorite-border" type="MaterialIcons" color={color} />
                    }
                }}
                name="AllTopicsScreen"
                component={AllTopicsScreen}
            />

            <TopTabsNavigator.Screen
                options={{
                    tabBarIcon: function ({color, focused}) {
                        return (focused) ?
                            <Icon style={styles.icon} type="MaterialIcons" name="star" color={color} /> :
                            <Icon style={styles.icon} name="star-border" type="MaterialIcons" color={color} />
                    }
                }}
                name="MyTopicsScreen"
                component={MyTopicsScreen}
            />

        </TopTabsNavigator.Navigator>
    )
}

const styles = StyleSheet.create({
    icon: {
        fontSize: 20
    }
});

export default ForumTopicsTopTabsNavigator;
