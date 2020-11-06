// import { StatusBar } from 'expo-status-bar';
// import React from "react";
// import { View, Text, StyleSheet, SafeAreaView } from "react-native";


// const App = () => {
//   return(
//       <View style={[styles.container,styles.teal]}>
//           <Text>Hello</Text>
//       </View>
//   )
// }

// const styles = StyleSheet.create({
//   teal:{
//     backgroundColor: 'teal',
//   },
//   container:{
//     paddingVertical :10, 
//     // paddingVertical is equivalent to paddingTop: 10, paddingBottom:10,
//     paddingHorizontal:30,
//     // paddingHorizontal is equivalent to paddingLeft: 30, paddingRight:30,
//     borderColor: 'cyan',
//     borderWidth: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     flex: 1,
//   }
// })

// export default App;


// Exercise
import StatusBar from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const App = () => {
  return(
    <View>
      <Text style={{textAlign:"center",marginVertical:10}}>Here are some boxes of different colours</Text>
      <Text style={[styles.all,styles.cyan]}>Cyan: #2aa198</Text>
      <Text style={[styles.all,styles.blue]}>Blue: #268bd2</Text>
      <Text style={[styles.all,styles.magenta]}>Magenta: #d33682</Text>
      <Text style={[styles.all,styles.orange]}>Orange: #cb4b16</Text>
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
  },
  cyan:{
    backgroundColor: "#2aa198",
  },
  blue:{
    backgroundColor : "#268bd2"
  },
  magenta:{
    backgroundColor: "#d33682"
  },
  orange:{
    backgroundColor: "#cb4b16"
  }
})

export default App;

