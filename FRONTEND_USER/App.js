import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { FormLabel, FormInput, SearchBar } from 'react-native-elements'

class GameCarosal extends Component {
  // construct CAROSAL STATE

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
  // constructor to send lat long data along with summoner name to the backend for account creation
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
  // construct GAME STATE and GEO LOCAL STATE ( or should lat long be done on the WELCOME page )
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  }
  // changeGameState
  // depending on Game state display the correct form component

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        })
      },
      (error) => this.setState({
        error: error.message
      }),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000
      },
    )
  }

  render() {
    return (
      <View>
        <SearchBar
          placeholder='Type Here...' />
        <GameCarosal></GameCarosal>
        <LeagueOfLegendsForm
          lat={this.state.latitude}
          long={this.state.longitude}>
        </LeagueOfLegendsForm>
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