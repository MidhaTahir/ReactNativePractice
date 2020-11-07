import React from "react";
import {  Text, FlatList } from "react-native";
import ColorBox from ".././components/ColorBox";


const ColorPalette = ({ route }) => {
    const { colors, paletteName } = route.params;
    return(
        <FlatList 
        data={colors}
        keyExtractor={item => item.colorName}
        renderItem={({ item }) => <ColorBox colorName={item.colorName} hexCode={item.hexCode}/>}
        ListHeaderComponent={<Text style={{textAlign:"center",marginVertical:10}}>{paletteName}</Text>}
        />
    )
}


export default ColorPalette;