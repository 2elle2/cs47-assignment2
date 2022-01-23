// Name: Michelle Leung
// CS 47: Assignment 2

import AppLoading from 'expo-app-loading';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  Platform, 
  TouchableOpacity, 
  SafeAreaView } from 'react-native';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';
import { Icons } from "./assets/Themes";

import { withTheme } from './assets/Themes/themeProvider';

export default function NavBar() {

  // const [currTheme, setCurrTheme] = useState(Themes.light); 

  return (
    <SafeAreaView style={styles.navBar}>
      <View style={styles.navBarItemsBox}>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("You clicked Menu!")}}>
          <Image source={require("./assets/Icons/menu_light.png")} style = {styles.button}/>
        </TouchableOpacity>
      </View>
      <Text style = {styles.logo}>
          ensom
      </Text>
      <View style={styles.navBarItemsBox}>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("You clicked Sun!")}} >  
          <Image source={require("./assets/Icons/sun.png")} style = {styles.button}/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingRight: "5%",
    paddingLeft: "5%",
    // backgroundColor: "grey", //for testing purposes
    alignItems: 'center',
    ...Platform.select({
      ios: {
        height: 41  
      },
      android: {
        height: 54
      },
      default: { //other platforms like web
        height: 50
      }
    })
  },


  navBarItemsBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    height: 40,
    width: 40,
    margin: '2%',
    marginTop: '2%',
  },


  logo: {
    fontSize: 32,
    textAlign: 'center',
    fontFamily: 'Sydney-Bold',
    // fontWeight: 'bold',
  },

  button: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
})

