import React from "react";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import PalettePreview from "../components/PalettePreview";
import  { SOLARIZED, RAINBOW, FRONTEND_MASTERS } from "./DATA";

const COLOR_PALETTES = [
    { paletteName: 'SOLARIZED' , colors: SOLARIZED },
    { paletteName: 'RAINBOW' , colors: RAINBOW },
    { paletteName: 'FRONTEND_MASTERS' , colors: FRONTEND_MASTERS }
]

const Home = ({ navigation }) => {
    return(
        <FlatList 
            style={styles.list}
            data={COLOR_PALETTES}
            keyExtractor={item => item.paletteName}
            renderItem={({ item }) => (
                <PalettePreview
                    onPress={() => { navigation.navigate('ColorPalette', item); }}
                    palette={item}
                />
            )}
        />


    )
}
const styles = StyleSheet.create({
    list:{
        padding : 10,
        backgroundColor: "white"
    }
})

export default Home;
