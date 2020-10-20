import React from 'react';
import { View, Text, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './pages/home/home-page';
import ContactPage from './pages/contact/contact-page';
import AboutPage from './pages/about/about-page';

// import CardComponent from './components/CardComponent';

// const Yellow = () => {
//   Alert.alert("Yellow")
// }
// const Brown = () => {
//   Alert.alert("Brown")
// }
// const Blue = () => {
//   Alert.alert("Blue")
// }
// const Red = () => {
//   Alert.alert("Red")
// }
// const Purple = () => {
//   Alert.alert("Purpple")
// }
// const Pink = () => {
//   Alert.alert("Pink")
// }

// // const App = () => {
// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.box1}>
// //         <View style={styles.box2}>
//              <TouchableHighlight style={styles.touchButton} onPress={Brown}>
//                <Text style={styles.text}>Card 1</Text>
//               </TouchableHighlight></View >
// //         <View style={styles.box3}>
// //         <TouchableHighlight style={styles.touchButton} onPress={Yellow}>
// //           <Text style={styles.text}>Card 2</Text>
// //           </TouchableHighlight>
// //           </View>
// //       </View>
// //       <View style={styles.box4}>
// //         <View style={styles.box5}><TouchableHighlight onPress={Blue}><Text style={styles.text}>Card 3</Text></TouchableHighlight></View>
// //         <View style={styles.box6}><Text style={styles.text}>Card 4</Text></View>
// //       </View>
// //       <View style={styles.box7}>
// //         <View style={styles.box8}><Text style={styles.text}>Card 5</Text></View>
// //         <View style={styles.box9}><Text style={styles.text}>Card 6</Text></View>
// //       </View>
// //     </View>
// //   )
// // }

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.box10}>
//         <Image source={require('./assets/registrarse.png')}></Image>
//         <Text style={{fontSize: 20, color: "white", fontWeight: "bold"}}> Sign Up</Text>
//       </View>
//       <View style={styles.box11}></View>
//       <View style={styles.box12}></View>
//     </View>
//   )
// }



// const App = () => {
//   const [name, setName] = useState('');
//   const [identification, setIdentification] = useState('');
//   const [city, setCity] = useState('');
//   const [telephone, setTelephone] = useState('');
//   const validateUserFields = () =>{
//     if (name == "") {
//       Alert.alert("Debe ingresar el nombre");
//     }
//     else if (identification == "" || isNan(identification) || identification.length < 5) {
//       Alert.alert("Debe ingresar el documento, debe ser númerio y debe contener más de 5 carácteres");
//     }
//     else if (city == "") {
//       Alert.alert("Debe ingresar la ciudad");
//     }
//     else if (telephone == "") {
//       Alert.alert("Debe ingresar el teléfono");
//     }
//   }
//   return (
//     <View style={styles.container}>
//       <CardComponent></CardComponent>
//       <Text>{name}</Text>
//       <TextInput style={styles.inputName} placeholder="Enter Name" onChangeText={text =>setName(text)}></TextInput>
//       <TextInput style={styles.inputIdentification} placeholder="Enter Identification" onChangeText={text =>setIdentification(text)}></TextInput>
//       <TextInput style={styles.inputCity} placeholder="Enter City" onChangeText={text =>setCity(text)}></TextInput>
//       <TextInput style={styles.inputTelephone} placeholder="Enter Telephone" onChangeText={text =>setTelephone(text)}></TextInput>
//     <TouchableHighlight style={styles.signUpButton} onPress={validateUserFields}>
//     <Text style={styles.signUpTextButton}>Sign Up</Text>
//     </TouchableHighlight>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center"
//   },
  // box1: {
  //   flex: 1,
  //   flexDirection: "row"
  // },
  // box2: {
  //   flex: 1,
  //   backgroundColor: '#795548',
  //   margin: 20,
  //   borderRadius: 10,
  //   alignItems: "center",
  //   justifyContent: "center"
  // },
  // box3: {
  //   flex: 1,
  //   backgroundColor: '#ffeb3b',
  //   margin: 20,
  //   borderRadius: 10,
  //   alignItems: "center",
  //   justifyContent: "center"
  // },
  // box4: {
  //   flex: 1,
  //   flexDirection: 'row'
  // },
  // box5: {
  //   flex: 1,
  //   backgroundColor: '#5c6bc0',
  //   margin: 20,
  //   borderRadius: 10,
  //   alignItems: "center",
  //   justifyContent: "center"
  // },
  // box6: {
  //   flex: 1,
  //   backgroundColor: '#7e57c2',
  //   margin: 20,
  //   borderRadius: 10,
  //   alignItems: "center",
  //   justifyContent: "center"
  // },
  // box7: {
  //   flex: 1,
  //   flexDirection: "row"
  // },
  // box8: {
  //   flex: 1,
  //   backgroundColor: '#9c27b0',
  //   margin: 20,
  //   borderRadius: 10,
  //   alignItems: "center",
  //   justifyContent: "center"
  // },
  // box9: {
  //   flex: 1,
  //   backgroundColor: '#f44336',
  //   margin: 20,
  //   borderRadius: 10,
  //   alignItems: "center",
  //   justifyContent: "center"
  // },
  // text: {
  //   color: "#ffff",
  //   fontSize: 20
  // },
  // touchButton: {
  //   padding: 20,
  //   backgroundColor: "#9e9e9e",
  //   flexDirection: "row",
  //   borderRadius: 10
  // },
  // box10: {
  //   flex: 1,
  //   backgroundColor: "#00bcd4",
  //   alignContent: "center",
  //   justifyContent: "center"
  // },
  // box11: {
  //   flex: 1,
  //   backgroundColor: "white"
  // },
  // box12: {
  //   width: Dimensions.get("screen").width * 0.9,
  //   height: Dimensions.get("screen").height * 0.4,
  //   backgroundColor: "white",
  //   position: "absolute",
  //   left: Dimensions.get("screen").width * 0.05,
  //   right: Dimensions.get("screen").width * 0.05,
  //   top: Dimensions.get("screen").height * 0.4,
  //   borderRadius: 15
  // },
//   inputName: {
//     borderColor: "black",
//     borderWidth: 1,
//     borderRadius: 5,
//     width: Dimensions.get("screen").width * 0.9,
//     // paddingLeft: Dimensions.get("screen").width * 0.35,
//     // paddingRight: Dimensions.get("screen").width * 0.35,
//     paddingTop: 5,
//     paddingBottom: 5,
//     paddingLeft: 5
//   },
//   inputIdentification: {
//     borderColor: "black",
//     borderWidth: 1,
//     borderRadius: 5,
//     width: Dimensions.get("screen").width * 0.9,
//     paddingTop: 5,
//     paddingBottom: 5,
//     marginTop: 10,
//     paddingLeft: 5
//   },
//   inputCity: {
//     borderColor: "black",
//     borderWidth: 1,
//     borderRadius: 5,
//     width: Dimensions.get("screen").width * 0.9,
//     paddingTop: 5,
//     paddingBottom: 5,
//     marginTop: 10,
//     paddingLeft: 5
//   },
//   inputTelephone: {
//     borderColor: "black",
//     borderWidth: 1,
//     borderRadius: 5,
//     width: Dimensions.get("screen").width * 0.9,
//     paddingTop: 5,
//     paddingBottom: 5,
//     marginTop: 10,
//     paddingLeft: 5
//   },
//   signUpButton:{
//     marginTop: 10,
//     backgroundColor: "#607d8b",
//     padding: 10,
//     borderRadius: 5,
//     width: Dimensions.get("screen").width * 0.2,
//     alignItems: "center"
//   },
//   signUpTextButton:{
//     color: "white"
//   }
// });

const Stack = createStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={HomePage}/>
      <Stack.Screen name="Contact" component={ContactPage}/>
      <Stack.Screen name="About" component={AboutPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App

