import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, Image } from 'react-native';
import { Card, Button, FormLabel, FormInput, SearchBar } from 'react-native-elements'

// COULD DO A GLOBAL FETCH OT XTHP whatever it is called

class GameCarosal extends Component {
  constructor() {
    super()

    this.state = {
      isLoading: true,
      gamePicturesUri: null,
      gameTitle: null
    }
  }

  componentDidMount() {
    // make a request from server and create an array of images
    // fetch('https://facebook.github.io/react-native/movies.json')
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    //     this.setState({
    //       isLoading: false,
    //       dataSource: ds.cloneWithRows(responseJson.movies),
    //     }, function() {
    //       // do something with new state
    //     });
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   })
    this.setState({
      isLoading: false,
      gamePicturesUri: 'https://news-a.akamaihd.net/public/images/misc/GameBox.jpg',
      gameTitle: 'League of Legends'
    })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <ActivityIndicator />
          <Text>We are Loading...</Text>
        </View>
      )
    }

    return (
      <Card
      title={this.state.gameTitle}
      image={{uri: this.state.gamePicturesUri}}>
        <Text style={{marginBottom: 10}}>
          The idea with React Native Elements is more about component structure than actual design.
        </Text>
        <Button
          icon={{name: 'code'}}
          backgroundColor='#03A9F4'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='ABOUT THIS GAME?' />
      </Card>
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
      <View style={{flex: 1, backgroundColor: '#000'}}>
        <SearchBar
          containerStyle={{marginTop: 20}}
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
  test: {
    fontWeight: 'bold',
    fontSize: 120
  },
  image: {
    height: 350
  }
})