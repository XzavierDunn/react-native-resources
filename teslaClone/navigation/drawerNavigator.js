import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import StackNavigator from './StackNavigator';
import Left from '../components/LeftPage';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Main" component={StackNavigator} options={{ headerShown: false }} />
            <Drawer.Screen name="Side Page" component={Left} options={{ headerShown: true }} />
        </Drawer.Navigator>
    )
};

export default DrawerNavigator;