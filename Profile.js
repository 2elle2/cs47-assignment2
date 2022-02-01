// Name: Michelle Leung
// CS 47: Assignment 2

// SwipeCards code from the GitHub page linked in the Assignment 2 spec:
// https://github.com/meteor-factory/react-native-tinder-swipe-cards

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

import SwipeCards from 'react-native-swipe-cards';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import NavBar from "./NavBar";


class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.card}>
        <Image style={styles.thumbnail} source={this.props.image} />
        <Text style={styles.profileName}>{this.props.name}</Text>
        <Text style={styles.profileDist}>{this.props.dist}</Text>
      </View>
    )
  }
}


class NoMoreCards extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.noMoreCards}>
        <Text>No more cards</Text>
      </View>
    )
  }
}

const cards = [
  { name: 'MTL', 
    dist: '2 miles away', 
    image: require("./assets/Profiles/mtl.jpg") },
  { name: 'Persis Drell', 
    dist: '0.5 miles away', 
    image: require("./assets/Profiles/drell.jpg") },
  { name: 'Susie Brubaker-Cole', 
    dist: '1.5 miles away', 
    image: require("./assets/Profiles/brubakercole.jpg") },
  { name: 'John Doe', 
    dist: '100 miles away', 
    image: require("./assets/Profiles/man1.jpg")},
  { name: 'Mary Sue', 
    dist: '47 miles away', 
    image: require("./assets/Profiles/woman1.jpg")},
]


export default class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: cards,
      outOfCards: false,
    };
  }

  handleYup (card) {
    console.log("Match!")
  }

  handleNope (card) {
    console.log("Guess not")
  }



  render() {
    return (
      <View style={styles.profilePicBox}>
        <SwipeCards
          cards={this.state.cards}
          loop={true}

          renderCard={(cardData) => <Card {...cardData} />}
          // renderNoMoreCards={() => <NoMoreCards />}
          showYup={true}
          showNope={true}

          handleYup={this.handleYup}
          handleNope={this.handleNope}

          yupText = "Match!"
          nopeText = "Guess not lol"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  profilePicBox: {
    flex: 8,
    flexDirection: "column",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 15,
    shadowColor: Themes.light.shadows.shadowColor,
    shadowOffset: Themes.light.shadows.shadowOffset,
    shadowOpacity: Themes.light.shadows.shadowOpacity,
    shadowRadius: Themes.light.shadows.shadowRadius,
  },

  card: {
    overflow: 'hidden',
  },
  thumbnail: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.45,
    borderRadius: 10,
  },
  profileName: {
    position: "absolute",
    marginTop: "5%",
    marginLeft: "5%",
    textAlign: "left",
    fontSize: 32,
    fontFamily: "Sydney",
    color: Themes.light.textSecondary,
  },
  profileDist: {
    position: "absolute",
    bottom: 0,
    marginTop: "5%",
    marginLeft: "5%",
    fontSize: 18,
    fontFamily: "Sydney",
    color: Themes.light.textSecondary,
  },


});


