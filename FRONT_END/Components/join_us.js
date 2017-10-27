import React, { Component } from 'react'
import { Text, View, Button, ScrollView, Image, KeyboardAvoidingView } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

import styles from './styles'

let form_inputs = {}
const images = [{
    title: 'League of Legends',
    source: 'http://techcords.com/wp-content/uploads/2017/04/feat.jpg'
},
{
    title: 'Street Fighter V',
    source: 'https://vignette.wikia.nocookie.net/streetfighter/images/1/15/Sf5logo.png/revision/latest?cb=20141207025747'
}]

export default class JoinUs extends Component {
    static navigationOptions = {
        title: 'Join Us',
    }

    constructor(props) {
        super(props)

        this.state = {
            summonerName: 'How are you known by?'
        }
    }
    _set_summoner_name() {}
    _submitForm = () => {
        // Place Validations
        console.log(JSON.stringify(form_inputs))
        this.props.navigation.navigate('Loading')        
    }

    log() { console.log('yues')}
    render() {
        let imageArray = []
        images.forEach((image, i) => {
            imageArray.push(
                <Image
                    key={`image${i}`}
                    source={{uri: image.source}}
                    style={styles.intro.game_image}
                />
            )
        })

        return (
            <KeyboardAvoidingView style={styles.intro.container}>
                <View>
                    <ScrollView
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        >
                        {imageArray}
                    </ScrollView>
                    <FormLabel>Summoner Name</FormLabel>
                    <FormInput
                        value={this.state.summonerName}
                        onChangeText={(summonerName) => this._set_summoner_name(summonerName)}>
                    </FormInput>
                    <FormValidationMessage>{}</FormValidationMessage>
                    <Button onPress={this.log} title='go for it' />
                </View>
            </KeyboardAvoidingView>
        )
    }
}