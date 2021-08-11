import React from 'react';
import { View, Image, Pressable } from 'react-native';

import styles from './styles';

const Header = ( props ) => {

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
            <Pressable onPress={() => props.navigation.navigate('Details')}>
                <Image style={styles.menu} source={require('../../assets/arrow.png')} accessibilityLabel={"Arrow by Chinnaking from the Noun Project"} />
            </Pressable>
        </View>
    );
};

export default Header;