import React, { Component } from 'react'
import { ActivityIndicator, View, Text, Button } from 'react-native'

import styles from './styles'

export default class Loading extends Component {
    constructor(props) {
        super(props)

        this.state = {
            buttonVisible: false
        }
    }

    // componentDidMount() {
    //     setInterval(() => {
    //         this.setState({buttonVisible: true});
    //     }, 3000);
    // }


    componentDidMount = () => {
        setInterval(() => {
            this.props.navigation.navigate('Profile')
        }, 3000);
    }

    profile = () => {}

    render() {
        return (
            <View style={styles.intro.image}>
                <ActivityIndicator />
                <Text>Loading</Text>
                {/* {
                    this.state.buttonVisible
                    ? <Button
                        onPress={this._profile}
                        title="You're All Set"
                        color="#000"
                        />
                    : <View>
                        <ActivityIndicator />
                        <Text>Loading</Text>
                    </View>
                } */}
            </View>
        )
    }
}