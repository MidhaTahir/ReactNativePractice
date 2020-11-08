import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet } from "react-native";
import { FlatList, TouchableOpacity, Text } from "react-native";
import PalettePreview from "../components/PalettePreview";
import axios from 'react-native-axios';

const Home = ({ navigation , route }) => {
    const newColorPalette = route.params ? route.params.newColorPalette : null;
    const [colors, setColors] = useState([])
    const [isRefreshing,setIsRefreshing] = useState(false);

    const handlePress = useCallback(() => {
        axios.get('https://color-palette-api.kadikraman.now.sh/palettes')
            .then(res => setColors(res.data))
            .catch(console.log)      
    },[])


    useEffect(() => {
        handlePress();
    }, [colors])


    const handleRefresh = useCallback(()=>{
        setIsRefreshing(true)
        handlePress();
        setTimeout(()=>{
            setIsRefreshing(false)
        },[3000])
    },[])
    
//for adding new color palette
    useEffect(()=>{
        if (newColorPalette) {
            setColors(currentpalettes => [newColorPalette, ...currentpalettes])
        }
    },[newColorPalette]);

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
            ListHeaderComponent={
                <TouchableOpacity onPress={()=> { navigation.navigate('ColorPaletteModal')}}>
                    <Text style={styles.text}>Add Color Scheme</Text>
                </TouchableOpacity>}
        />
    )
}


const styles = StyleSheet.create({
    list:{
        padding : 10,
        backgroundColor: "white"
    },
    text:{
        fontSize: 18,
        color : 'teal',
        fontWeight: 'bold',
        marginBottom: 10,
    }
})

export default Home;
