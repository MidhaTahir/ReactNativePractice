import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ColorBox = ({ colorName, hexCode }) => {
    const boxColor = {
        backgroundColor : hexCode,
        color : parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1 ? 'black' : 'white'
    }
    return (
        <View>
            <Text style={[styles.all,boxColor]}>{colorName}: {hexCode}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    all:{
      height: 40,
      marginHorizontal: 30,
      marginVertical : 10,
      textAlign: "center",
      textAlignVertical:"center",
    }
  })

export default ColorBox;
