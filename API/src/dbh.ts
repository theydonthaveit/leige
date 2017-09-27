import * as Bcrypt from 'bcrypt'
import * as SillyName from 'sillyname'

import MODELS from './models'

export default {
    addUser(ipAddress: string, postCode: string, locale: string): string {
        let generatedUsername: string
        generatedUsername = SillyName()

        const USER = MODELS.USER.sync({force: true}).then(() => {
            MODELS.USER.create({
                userName: generatedUsername,
                postCode: postCode,
                location: locale,
                ipAddress: ipAddress
            })
        })
        // TODO
        // If I want to do a redirect to "protect your account page" could wait for decision
        return USER.id
    },
    protectYourProfile(payload: any, ipAddress: string) {
        let bcryptPassword: string
        let saltRounds: number = 10

        Bcrypt.genSalt(saltRounds, function(err, salt) {
            Bcrypt.hash(payload.password, salt, function(err, hash) {
                bcryptPassword = hash
            })
        })        

        MODELS.USER.findOne({
            where: {
                ipAddress: ipAddress
            }
        }).then((user) => {
            user.update({
                mobile: payload.mobile,
                email: payload.email,
                password: bcryptPassword
            })
        })
    },
    buildYourProfile(payload: any, ipAddress: string): void {
        // TODO
        // bcrypt the password or confirm password
        // plus additional fields
        MODELS.USER.findOne({
            where: {
                ipAddress: ipAddress
            }
        }).then((user) => {
            user.update({
                firstName: payload.firstName,
                lastName: payload.lastName
            })
        })
    },
    addGameToProfile(payload: any): void {
        // TODO
        // Add games you play to your profile plus associated account details
    },
    createGame(payload: string) {
        // TODO
        // Create a game with all the requirements
    },
    addGameToLiveQueue(gameId: string) {
        // TODO
        // send ID of created game to LiveQueue database
    },
    updateUserLocation(ipAddress: string) { 
        // TODO
        // update the users locations each time they login via the web portal or phone
        // to accurately track their representation 
        // send email or prompt to ask if it is you logging in from that location
    }
}