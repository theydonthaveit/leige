import React, { Component } from 'react'
import { Text, View, Button, ScrollView, Image, KeyboardAvoidingView } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

import SelectGame from './gameSelect/SelectGame'
import styles from './styles'

export default class JoinUs extends Component {
    static navigationOptions = {
        title: 'Join Us',
    }

    render() {
        return (
            <KeyboardAvoidingView>
                <SelectGame />
            </KeyboardAvoidingView>
        )
    }
}