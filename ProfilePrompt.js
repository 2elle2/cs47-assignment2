// Name: Michelle Leung
// CS 47: Assignment 2

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions } from 'react-native';

import React from 'react';
import { Themes } from './assets/Themes';
import { Icons } from "./assets/Themes";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function ProfilePrompt() {

  return (
    <View style={styles.profilePrompt}>
      <Text style = {styles.hotTake}>
        My hottest take
      </Text>
      <View style={styles.promptIcons}>
        <View style={styles.playIcon}>
          <TouchableOpacity style = {styles.playIcon} onPress={()=>{alert("You clicked Play!")}}>
            <Image source={require("./assets/Icons/player_light.png")} style = {styles.playIcon}/>
          </TouchableOpacity>
        </View>

        <View style={styles.audioIcon}>
          <Image source={require("./assets/Icons/audio_waveform_light.png")} style = {styles.audioIcon}/>
        </View>
      </View>
    </View>


  )
}

const styles = StyleSheet.create({

  profilePrompt: {
    flex: 2,
    padding: "5%",
    width: windowWidth * 0.85,
    height: windowHeight * 0.15,
    backgroundColor: Themes.light.bgSecondary,
    borderRadius: 20,
    shadowColor: Themes.light.shadows.shadowColor,
    shadowOffset: Themes.light.shadows.shadowOffset,
    shadowOpacity: Themes.light.shadows.shadowOpacity,
    shadowRadius: Themes.light.shadows.shadowRadius,
  },

  hotTake: {
    fontFamily: "Sydney",
    fontSize: 28,
    color: Themes.light.text,
  },

  promptIcons: {
    flexDirection: "row",
    width: "100%",
    height: "55%",
    marginTop: "5%",
  },

  playIcon: {
    flex: 1,
    resizeMode: "contain",
    height: "100%",
    width: "100%",
  },

  audioIcon: {
    flex: 3,
    resizeMode: "contain",
    height: "100%",
    width: "100%",
    marginLeft: "2%",
    marginRight: "2%",
  },


});


