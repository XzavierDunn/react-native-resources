import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Screens/Home';
import About from '../Screens/About';

const Stack = createStackNavigator();
const screenOptionStyle = {
    headerStyle: {
        backgroundColor: "#9AC4F8"
    },
    headerTintColor: "white",
    headerBackTitle: "Black"
};

const MainStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={screenOptionStyle}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
    );
};


export default MainStackNavigator;
