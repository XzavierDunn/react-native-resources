import React from 'react';
import { View, FlatList, Dimensions } from 'react-native';

import styles from './styles';
import data from './cars';
import Car from '../Car';

const CarsList = (props) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={item => item.name}
                renderItem={item => <Car item={item.item}/>}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
        
    );
};

export default CarsList;