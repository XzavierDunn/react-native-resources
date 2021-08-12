import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from "expo-status-bar";

import CarsList from '../CarsList';
import Header from '../Header';

const Home = ({ navigation }) => {

    return (
        <View>
          <Header navigation={navigation} />
          <CarsList />
          <StatusBar style="auto" />
        </View>
    );
};

export default Home;