import React from "react";
import { View, Text, Pressable, Image } from "react-native";

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';

import Home from './components/Home';
import styles from './components/Header/styles';

const Stack = createNativeStackNavigator ();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Details" component={DetailsScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.container}>
        <Pressable onPress={() => navigation.goBack()}>
            <Image style={[styles.menu, { transform: [{ scaleX: -1 }]}]} source={require('./assets/arrow.png')} accessibilityLabel={"Arrow by Chinnaking from the Noun Project"} />
        </Pressable>
      </View>
      <Text>Details Screen</Text>
    </View>
  );
}