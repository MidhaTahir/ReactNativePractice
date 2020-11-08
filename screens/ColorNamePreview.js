import React, { useState } from 'react'
import { Text , Switch, View, StyleSheet } from "react-native";


const ColorNamePreview = ({ palette, selectedColorsList, handleValueChange }) => {

    return ( 
        <View style={styles.colorPreview}>
            <Text>{palette.colorName}</Text>
            <Switch value={selectedColorsList} onValueChange={handleValueChange} />
        </View>
    )
}

const styles = StyleSheet.create({
    colorPreview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', 
        padding: 10, 
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    }
})

export default ColorNamePreview
