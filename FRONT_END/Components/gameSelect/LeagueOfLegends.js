import React, { Component } from 'react'
import { View, Text, Alert } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { FormData } from './dataStore'

export default class LeagueOfLegends extends Component {
    state = {
        latitude: '',
        longitude: '',
        error: ''
    }

    currentLocal = null
    watchID = null

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                FormData.coords = {
                    lat: position.coords.latitude,
                    long: position.coords.longitude
                }
            },
            (error) => this.setState({error: error.message}),
            {
                enableHighAccuracy: true,
                timeout: 20000,
                maximumAge: 1000
            }
        )

        // this.watchID = navigator.geolocation.watchPosition(
        //     (position) => {
        //         this.setState({
        //             latitude: position.coords.latitude,
        //             longitude: position.coords.longitude
        //         })
        //     },
        //     (error) => this.setState({error: error.message}),
        //     {
        //         enableHighAccuracy: true,
        //         timeout: 20000,
        //         maximumAge: 1000
        //     }
        // )
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchId)
    }

    render() {
        return (
            <View>
                <Text>League Of Legends</Text>
                <FormLabel>Summoner Name</FormLabel>
                <FormInput onChangeText={(summonerName) => FormData.summonerName = summonerName}/>
            </View>
        )
    }
}