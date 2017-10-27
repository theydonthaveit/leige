import React, { Component } from 'react'
import { Text, View, Button, ScrollView } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

import styles from './styles'

let form_inputs = {}

export default class JoinUs extends Component {
    static navigationOptions = {
        title: 'Join Us',
        tabBarPosition: "bottom"
    }

    constructor(props) {
        super(props)

        this.state = {
            firstname: 'Mine?',
            lastname: 'You must have one',
            email: 'We all have one',
            password: 'Be Cryptic',
            repassword: 'Can you remember?',
            buttonError: false
        }
    }

    _validate_first_name(firstname) {
        form_inputs.firstname = firstname

        this.setState({firstname})
    }
    _validate_last_name(lastname) {
        form_inputs.lastname = lastname
        this.setState({lastname})
    }

    _set_email(email) {
        this.setState({email})
    }
    _validate_email(email) {
        let reEmail = /\w+\@\w+\.\w+/

        if ( email.match(reEmail) ) {
            form_inputs.email = email
            return 'We will send you an email to validate'
        }
        else {
            return 'Not Valid Email'
        }
    }

    _validate_password(password) {
        form_inputs.passord = password

        this.setState({password})
    }
    _set_password(repassword) {
        this.setState({repassword})
    }
    _check_password(password) {
        if ( password === this.state.repassword ) {
            return 'We are all Good'
        }
        else {
            return 'You got it wrongz'
        }
    }

    _set_card() {}
    _validate_card() {}

    _set_exp() {}
    _validate_exp() {}

    _set_cvc() {}
    _validate_cvc() {}

    _submitForm = () => {
        // Place Validations
        console.log(JSON.stringify(form_inputs))
        this.props.navigation.navigate('Loading')        
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
                        <FormLabel>first name</FormLabel>
                        <FormInput
                            value={this.state.firstname}
                            onChangeText={(firstname) => this._validate_first_name(firstname)}/>
                        <FormValidationMessage>{this.state.firstname === 'Mine?' ? 'Required' : ''}</FormValidationMessage>
                        <FormLabel>last name</FormLabel>
                        <FormInput
                            value={this.state.lastname}
                            onChangeText={(lastname) => this._validate_last_name(lastname)}/>
                        <FormValidationMessage>{this.state.lastname === 'You must have one' ? 'Required' : ''}</FormValidationMessage>
                        <FormLabel>email</FormLabel>
                        <FormInput
                            value={this.state.email}
                            onChangeText={(email) => this._set_email(email)}/>
                        <FormValidationMessage>
                            {this._validate_email(this.state.email)}
                        </FormValidationMessage>
                        <FormLabel>password</FormLabel>
                        <FormInput
                            value={this.state.password}
                            onChangeText={(password) => this._validate_password(password)}/>
                        <FormValidationMessage>{this.state.password === 'Be Cryptic' ? 'Required' : ''}</FormValidationMessage>
                        <FormLabel>repeat password</FormLabel>
                        <FormInput
                            value={this.state.repassword}
                            onChangeText={(repassword) => this._set_password(repassword)}/>
                        <FormValidationMessage>
                            { this._check_password(this.state.password) }
                        </FormValidationMessage>
                        <Text>Swipe Left -> Finance</Text>
                    </View>
                    <View style={styles.intro.image}>
                        <FormLabel>card number</FormLabel>
                        <FormInput
                            value={this.state.card}
                            onChangeText={(card) => this._set_card(card)}/>
                        <FormValidationMessage>{}</FormValidationMessage>
                        <FormLabel>expiry date</FormLabel>
                        <FormInput
                            value={this.state.exp}
                            onChangeText={(exp) => this._set_exp(exp)}/>
                        <FormValidationMessage>{}</FormValidationMessage>
                        <FormLabel>cvc</FormLabel>
                        <FormInput
                            value={this.state.cvc}
                            onChangeText={(cvc) => this._set_cvc(cvc)}/>
                        <FormValidationMessage>{}</FormValidationMessage>
                        <Button
                            onPress={this._submitForm}
                            title="Connect"
                            color="#000"
                        />
                        <FormValidationMessage>
                            { this._check_password(this.state.password) }
                        </FormValidationMessage>
                    </View>
                </ScrollView>
            </View>
        )
    }
}