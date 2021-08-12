import React from "react";
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigation/drawerNavigator';

export default function App() {
  return (
      <NavigationContainer>
       <DrawerNavigator />
    </NavigationContainer>
  );
};
