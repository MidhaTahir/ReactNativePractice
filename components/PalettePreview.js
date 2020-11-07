import React from 'react'
import {  View,Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";

const PalettePreview = ({ onPress, palette }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.text}>{ palette.paletteName }</Text>
            <FlatList
                style={styles.list}
                // horizontal={true}
                data={palette.colors.slice(0,5)}
                keyExtractor={item => item.colorName}
                renderItem={({ item }) => (<View style={[styles.box, {backgroundColor: item.hexCode}]}/>)}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text:{
        fontWeight : "bold",
        fontSize : 18,
        marginBottom: 10,
    },
    box:{
        height: 30,
        width: 30,
        marginRight: 10,
        // IOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        // elevation for android phones
        elevation: 2,
    },
    list:{
        marginBottom: 20,
        flexDirection: 'row',
    }
});

export default PalettePreview;
