import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { FormLabel, FormInput } from 'react-native-elements'
import { GameData, FormData } from './dataStore'

export default class SelectGame extends Component {
    constructor(props) {
        super(props)

        this.state = {
            game: '',
            foundGame: false,
            mountGameComponent: ''
        }
    }

    _submitForm = () => {
        console.log(JSON.stringify(FormData))
        // this.props.navigation.navigate('Loading')        
    }

    _findGame = () => {
        if (GameData[this.state.game]) {
            this.setState({
                foundGame: true,
                mountGameComponent: GameData[this.state.game]
            })
        }
    }

    render() {
        return (
            <View>
            {
                this.state.foundGame
                ? (
                    <View>
                        {this.state.mountGameComponent}
                        <Button onPress={this._submitForm} title='Submit' />
                    </View>
                )
                : (
                    <View>
                        <FormLabel>Find your Game</FormLabel>
                        <FormInput
                            onChangeText={(game) => this.setState({game})}
                        ></FormInput>
                        <Button onPress={this._findGame} title='Find Your Game' />
                    </View>
                ) 
            }
            </View>
        )
    }
}