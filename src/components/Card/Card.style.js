import React from 'react';
import {
    StyleSheet
} from 'react-native';


const styles = StyleSheet.create({

    card: {
        backgroundColor: '#EDF0F2',
        margin: 5,
        marginBottom: 10,
        marginTop: 0,
        padding: 10,
        borderRadius: 10,
        flex: 1, 
    },
    image: {
        height: 200,
        width: '100%',
        resizeMode: 'cover',
        borderRadius: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },
    price: {
        paddingTop: 5,
        fontSize: 15,
        color: 'grey',
        marginTop: 'auto'
    },
    inStock: {
        fontSize: 16,
        color: 'red',
        fontWeight: 'bold'
    }
});

export default styles;