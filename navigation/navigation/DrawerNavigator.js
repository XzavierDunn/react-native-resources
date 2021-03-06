import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import ContactStackNavigator from './ContactNavigator';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Go Back" component={TabNavigator} />
            <Drawer.Screen name="Contact" component={ContactStackNavigator} />
        </Drawer.Navigator>
    )
}
export default DrawerNavigator;
