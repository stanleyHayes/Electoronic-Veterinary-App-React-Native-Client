import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';

import {NavigationContainer} from '@react-navigation/native';
import RootStackNavigator from './src/navigators/RootStackNavigator';


function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <RootStackNavigator/>
            </NavigationContainer>
        </Provider>
    );
}

export default App;
