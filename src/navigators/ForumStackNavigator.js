import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';


import ForumTopicsTopTabsNavigator from './ForumTopicsTopTabsNavigator';
import TopicCommentsScreen from '../screens/forum/TopicCommentsScreen';
import CommentRepliesScreen from '../screens/forum/CommentRepliesScreen';

const StackNavigator = createStackNavigator();

function ForumStackNavigator() {
    return (
        <StackNavigator.Navigator
            initialRouteName="ForumTopicsTopTabsNavigator"
            screenOptions={{headerShown: true, title: 'Forum'}}>
            <StackNavigator.Screen
                name="ForumTopicsTopTabsNavigator"
                component={ForumTopicsTopTabsNavigator}
            />

            <StackNavigator.Screen
                name="TopicCommentsScreen"
                component={TopicCommentsScreen}
            />
            <StackNavigator.Screen
                name="CommentRepliesScreen"
                component={CommentRepliesScreen}/>
        </StackNavigator.Navigator>
    );
}

export default ForumStackNavigator;
