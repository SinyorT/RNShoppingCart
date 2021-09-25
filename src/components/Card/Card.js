import React from 'react';
import {
    View,
    Image,
    Text
} from 'react-native';
import styles from './Card.style'

const Card = ({ item }) => {
    console.log(item)
    return (
        <View style={styles.card}>
            <Image
                style={styles.image}
                source={{ uri: item.imgURL }}
            />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>{item.price}</Text>
            {
                !item.inStock && <Text style={styles.inStock}>STOKTA YOK</Text>
            } 
        </View>
    );
}

export default Card;
