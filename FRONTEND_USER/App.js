import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { FormLabel, FormInput, SearchBar } from 'react-native-elements'

class GameCarosal extends Component {
  render() {
    let pic = {
      uri: 'https://news-a.akamaihd.net/public/images/misc/GameBox.jpg'
    }
    return (
      <Image source={pic} style={styles.image}/>
    )
  }
}
class LeagueOfLegendsForm extends Component {
  render () {
    return (
      <View>
        <FormLabel>Summoner Name</FormLabel>
        <FormInput/>
      </View>
    )
  }
}

export default class App extends Component {
  // construct GAME STATE
  // changeGameState
  // depending on Game state display the correct form component

  render() {
    return (
      <View>
        <SearchBar
          placeholder='Type Here...' />
        <GameCarosal></GameCarosal>
        <LeagueOfLegendsForm></LeagueOfLegendsForm>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  test: {fontWeight: 'bold',
  fontSize: 120},
  image: {
    height: 350
  }
})