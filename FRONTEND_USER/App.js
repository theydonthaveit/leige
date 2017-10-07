import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { FormLabel, FormInput, SearchBar } from 'react-native-elements'

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

class StreetFigherForm extends Component {
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
        <Text>Complete</Text>
        <LeagueOfLegendsForm></LeagueOfLegendsForm>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  test: {fontWeight: 'bold',
  fontSize: 120}
})