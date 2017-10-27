import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

import styles from './styles'

export default class AboutUs extends Component {
    static navigationOptions = {
        title: 'About Us'
    }

    render() {
        return (
        <View>
            <Text>About Us</Text>
        </View>
        )
    }
}