// Name: Michelle Leung
// CS 47: Assignment 2

// Referenced this site for how to make buttons with images:
// https://www.prudentdevs.club/btns-imgs-in-react-native

// And used SwipeCards code from this GitHub page linked in the Assignment 2 spec:
// https://github.com/meteor-factory/react-native-tinder-swipe-cards

// Note: I tried to implement changing themes functionality (between light/dark)
// but was unable to figure out how to do it; any advice on that would be helpful :)


import AppLoading from 'expo-app-loading';
import { 
  StyleSheet, 
  Text, 
  View, 
  StatusBar, 
  Image, 
  Platform, 
  TouchableOpacity, 
  SafeAreaView } from 'react-native';

import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';
import { Icons } from "./assets/Themes";

import { themes } from './assets/Themes/themeProvider';
import { ThemeContextProvider } from './assets/Themes/themeProvider';


import NavBar from "./NavBar"; //don't need { } bc "export default"
import Profile from "./Profile";
import ProfilePrompt from "./ProfilePrompt";
import BottomBar from "./BottomBar";


export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    'Sydney-Bold': require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  {/*  My attempts at having a changed theme functionality:
  // hooks: useState
  // const [theme, setTheme] = useState({}); //pass in initial value; empty object {}
  // const [theme, setTheme] = useState(Themes.light);  //pass in light theme
  // const themeData = { theme, setTheme };
  */}

  return (
    <ThemeContextProvider>

      <View style={styles.container}>

        <NavBar/>

        <View style={styles.profile}>
          <Profile/>
          <ProfilePrompt/>
        </View>

        <View style={styles.extraSpace}></View>

        <BottomBar/>
        
      </View>

    </ThemeContextProvider>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.light.bg, 
    
    ...Platform.select({
      ios: {
        paddingTop: 48
      }
    })
  },

  extraSpace: {
    flex: 2,
  },
  profile: {
    flex: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

});



