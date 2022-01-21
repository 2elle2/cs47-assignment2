import React, {useState} from 'react';

import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
} from 'react-native';

export default function BottomButton({ imagePath, iconName }) {
	return (
		<View style={styles.bottomActionIcon}>
          <TouchableOpacity style = {styles.button} onPress={()=>{
          		alert(<Text>You clicked {iconName}!</Text>)
          	}}>
            
            <>   
          {/* can use <> </> to group multiple elements */}
            <Image source={require( {imagePath} )} style = {styles.button}/>
            
            </>

          </TouchableOpacity>
          <Text style={styles.bottomText}>
            DMs
          </Text>
        </View>
	)
}


const styles = StyleSheet.create({
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

	button: {
	    height: "100%",
	    width: "100%",
	    resizeMode: "contain",
	},

	bottomText: {
	    fontSize: 16,
	    fontFamily: 'Sydney',
	    color: "white",
	},


});