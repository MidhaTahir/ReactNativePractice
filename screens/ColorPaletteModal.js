import React, { useState, useCallback } from 'react'
import { View, Text, TextInput, StyleSheet, FlatList, Alert, TouchableOpacity, Switch } from "react-native";
import { COLORS } from "./DATA";
import ColorNamePreview from "./ColorNamePreview";

const ColorPaletteModal = ({ navigation }) => {

    const [submitName, setSubmitName] = useState("")
    const [selectedColors, setSelectedColors] = useState([]);

    const handleSubmit = useCallback(()=>{
        if (!submitName) {
            Alert.alert('Please enter a palette name')
        }else if (selectedColors.length < 3) {
            Alert.alert('Please add atleast 3 colors')
        }
        else{
            const newColorPalette = {
                paletteName: submitName,
                colors: selectedColors,
            }
            navigation.navigate('Home', {newColorPalette})
        }
    },[submitName,selectedColors])


    //for selected toggle colors
    const handleValueChange = useCallback((value, color) => {
        if (value == true){
            setSelectedColors(colors => [...colors, color])
        }else{
            setSelectedColors(colors => colors.filter(selectedColor => color.colorName !== selectedColor))
        }
    },[selectedColors])

    return (
        <View>
            <Text style={{marginHorizontal: 10}}>Enter Name of Palette</Text>
            <TextInput 
                style={styles.input}
                onChangeText={text => setSubmitName(text)}
                value={submitName}            
            />

            <TouchableOpacity onPress={handleSubmit} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>

            <FlatList 
                data={COLORS}
                keyExtractor={item => item.colorName}
                renderItem={({ item }) => (
                    <ColorNamePreview
                        palette={item}
                        selectedColorsList={!!selectedColors.find(color => color.colorName === item.colorName)}
                        handleValueChange={(newValue) => handleValueChange(newValue, item)}
                    />
                )}
            />

            </View>
    )
}

const styles = StyleSheet.create({
    input:{
        borderWidth: 1,
        borderColor: 'grey',
        padding: 5,
        marginBottom: 50,
        marginHorizontal: 10,
    },
    buttonContainer:{
        height: 40,
        backgroundColor: 'teal',
        borderRadius: 5,
        justifyContent: "center",
        alignItems: 'center'
    },
    buttonText:{
        color: "white",
        fontWeight: "bold",
    }
})

export default ColorPaletteModal
