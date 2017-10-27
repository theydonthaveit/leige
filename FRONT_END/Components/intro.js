import React, { Component } from 'react'
import { Text, Button, View, Image, ScrollView } from 'react-native'

import styles from './styles'

export default class Intro extends Component {
    static navigationOptions = {
        title: 'leige',
        headerTintColor: '#2F95D6',
        headerStyle: {
            backgroundColor: '#ffffff',
            borderBottomColor: '#2F95D6',
            borderBottomWidth: 3
        },
        headerTitleStyle: {
            fontSize: 18
        }
    }

    _aboutUs = () => {
        this.props.navigation.navigate('AboutUs')
    }

    _joinUs = () => {
        this.props.navigation.navigate('JoinUs')
    }

    render() {
        return (
        <View>
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
            >
                <View style={styles.intro.image}>
                    <Text style={styles.intro.text}>Hi</Text>
                </View>
                <View style={styles.intro.image}>
                    <Text style={styles.intro.text}>welcome</Text>
                    <Text style={styles.intro.text}>welcome to foodtech</Text>
                    <Text style={styles.intro.text}>innovating food services</Text>
                </View>
                <View style={styles.intro.image}>
                    <View>
                        <Text style={styles.intro.text}>community</Text>
                        <Text style={styles.intro.text}>Why not be apart of the community?</Text>
                    </View>
                    <View style={styles.intro.buttonPlacement}>
                    <Button
                        onPress={this._aboutUs}
                        title="ABOUT US"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                    <Button
                        onPress={this._joinUs}
                        title="JOIN US"
                        color="#000"
                        accessibilityLabel="Learn more about this purple button"
                    />
                    </View>
                </View>
            </ScrollView>
        </View>
        )
    }
}