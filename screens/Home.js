import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import PalettePreview from "../components/PalettePreview";
import  { SOLARIZED, RAINBOW, FRONTEND_MASTERS } from "./DATA";
import axios from 'react-native-axios';

const COLOR_PALETTES = [
    { paletteName: 'SOLARIZED' , colors: SOLARIZED },
    { paletteName: 'RAINBOW' , colors: RAINBOW },
    { paletteName: 'FRONTEND_MASTERS' , colors: FRONTEND_MASTERS }
]

const Home = ({ navigation }) => {

    const [colors, setColors] = useState([])
    const [isRefreshing,setIsRefreshing] = useState(false);

    const handlePress = useCallback(() => {
        axios.get('https://color-palette-api.kadikraman.now.sh/palettes')
            .then(res => setColors(res.data))
            .catch(console.log)      
    },[])


    useEffect(() => {
        handlePress();
    }, [])


    const handleRefresh = useCallback(()=>{
        setIsRefreshing(true)
        handlePress();
        setTimeout(()=>{
            setIsRefreshing(false)
        },[3000])
    },[])
    
    return(
        <FlatList 
            style={styles.list}
            data={colors}
            keyExtractor={item => item.paletteName}
            renderItem={({ item }) => (
                <PalettePreview
                    onPress={() => {navigation.navigate('ColorPalette', item)}}
                    palette={item}
                />
            )}
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
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
