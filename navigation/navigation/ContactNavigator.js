import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Contact from "../Screens/Contact";

const Stack = createStackNavigator();
const screenOptionStyle = {
    headerStyle: {
        backgroundColor: "#9AC4F8"
    },
    headerTintColor: "white",
    headerBackTitle: "Black"
};

const ContactStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Contact" component={Contact} />
        </Stack.Navigator>
    );
};

export default ContactStackNavigator;