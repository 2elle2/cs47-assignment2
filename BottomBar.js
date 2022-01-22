// Name: Michelle Leung
// CS 47: Assignment 2

import {
	StyleSheet,
	View,
	Image,
	Text,
	TouchableOpacity,
} from 'react-native';

// import BottomButton from "./BottomButton";


export default function BottomBar() {

	return (
		<View style={styles.bottom}>	

	        <View style={styles.bottomActionIcon}>
	          <TouchableOpacity style = {styles.button} onPress={()=>{alert("You clicked Discover!")}}>
	            <Image source={require("./assets/Icons/discover_light.png")} style = {styles.button}/>
	            <Text style={styles.bottomText}>
	              Discover
	            </Text>
	          </TouchableOpacity>
	        </View>

	        <View style={styles.bottomActionIcon}>
	          <TouchableOpacity style = {styles.button} onPress={()=>{alert("You clicked Matches!")}}>
	            <Image source={require("./assets/Icons/heart_light.png")} style = {styles.button}/>
	            <Text style={styles.bottomText}>
	              Matches
	            </Text>
	          </TouchableOpacity>
	          
	        </View>


	        <View style={styles.bottomActionIcon}>
	          <TouchableOpacity style = {styles.button} onPress={()=>{alert("You clicked DMs!")}}>
	            <Image source={require("./assets/Icons/messages_light.png")} style = {styles.button}/>
	            <Text style={styles.bottomText}>
	              DMs
	            </Text>
	          </TouchableOpacity>
	          
	        </View>

	    </View>
    );
}


const styles = StyleSheet.create({
	bottom: {
		// flex: 1,
		backgroundColor: Themes.light.navigation,
		justifyContent: "space-around",
		flexDirection: "row",
		padding: 8,
		...Platform.select({
		    ios: {
		      height: 100
		    },
		    android: {
		      height: 110
		    },
		    default: {
		      height: 105
		    }
		})
	},

	bottomActionIcon: {
		height: "50%",
		width: "50%",
		marginLeft: 15,
		marginRight: 15,
		marginTop: "1%",
		alignItems: 'center',
		justifyContent: 'center',
	},


	bottomText: {
		fontSize: 14,
		fontFamily: 'Sydney',
		color: Themes.light.textSecondary,
		textAlign: "center",
	},

	button: {
	    height: "100%",
	    width: "100%",
	    resizeMode: "contain",
	},
})


