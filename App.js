// Name: Michelle Leung
// CS 47: Assignment 2

// Referenced this site for how to make buttons with images:
// https://www.prudentdevs.club/btns-imgs-in-react-native


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
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';
import { Icons } from "./assets/Themes"

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    'Sydney-Bold': require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  /* insert your code here */

  return (
    <View style={styles.container}>
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
          <TouchableOpacity style={styles.button} onPress={()=>{alert("You clicked Menu!")}}>
            <Image source={require("./assets/Icons/sun.png")} style = {styles.button}/>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <View style={styles.profile}>
        <View style={styles.profilePic}>
          <Image source={require("./assets/Profiles/mtl.jpg")} style = {styles.profilePicImg}/>
          <Text style = {styles.profileName}>
            MTL
          </Text>
          <Text style = {styles.profileDist}>
            2 miles away
          </Text>
        </View>

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

        <View style={styles.extraSpace}></View>
      </View>

      

      <View style={styles.bottom}>

        <View style={styles.bottomActionIcon}>
          <TouchableOpacity style = {styles.button} onPress={()=>{alert("You clicked Discover!")}}>
            <Image source={require("./assets/Icons/discover_light.png")} style = {styles.button}/>
            
          </TouchableOpacity>
          <Text style={styles.bottomText}>
            Discover
          </Text>
        </View>

        <View style={styles.bottomActionIcon}>
          <TouchableOpacity style = {styles.button} onPress={()=>{alert("You clicked Matches!")}}>
            <Image source={require("./assets/Icons/heart_light.png")} style = {styles.button}/>
          </TouchableOpacity>
          <Text style={styles.bottomText}>
            Matches
          </Text>
        </View>

        <View style={styles.bottomActionIcon}>
          <TouchableOpacity style = {styles.button} onPress={()=>{alert("You clicked DMs!")}}>
            <Image source={require("./assets/Icons/messages_light.png")} style = {styles.button}/>
          </TouchableOpacity>
          <Text style={styles.bottomText}>
            DMs
          </Text>
        </View>

        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F2F0',
    
    ...Platform.select({
      ios: {
        paddingTop: 48
      }
    })
  },

  navBar: {
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingRight: "5%",
    paddingLeft: "5%",
    // backgroundColor: 'grey', //for testing purposes
    alignItems: 'center',
    ...Platform.select({
      ios: {
        //the assignment spec mentioned 41px for ios, but it seemed a bit too thin
        height: 51  
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
    // backgroundColor: "red", //for testing purposes
    margin: '1.5%'
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




  bottom: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "space-around",
    flexDirection: "row",
    padding: 8,
    height: 200,
  },

  bottomActionIcon: {
    height: "50%",
    width: "50%",
    // backgroundColor: "red",
    marginLeft: 15,
    marginRight: 15,
    marginTop: "3%",
    alignItems: 'center',
    justifyContent: 'center',
  },


  bottomText: {
    fontSize: 16,
    fontFamily: 'Sydney',
    color: "white",
  },





  extraSpace: {
    flex: 2,
  },




  profile: {
    flex: 8,
    flexDirection: "column",
    alignItems: "center",
  },

  profilePic: {
    width: "85%",
    height: "60%",
    flex: 6,
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: "blue", //testing purposes
    borderRadius: 8,
    shadowColor: "#171717",
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },

  profilePicImg: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },

  profilePrompt: {
    flex: 2,
    flexDirection: "column",
    padding: "5%",
    width: "87%",
    height: "15%",
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#171717",
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  hotTake: {
    fontFamily: "Sydney",
    fontSize: 28,
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

  profileName: {
    position: "absolute",
    marginTop: "5%",
    marginLeft: "5%",
    fontSize: 32,
    fontFamily: "Sydney",
    color: "white",
  },

  profileDist: {
    position: "absolute",
    bottom: 0,
    marginTop: "5%",
    marginLeft: "5%",
    fontSize: 18,
    fontFamily: "Sydney",
    color: "white",
  },

});



