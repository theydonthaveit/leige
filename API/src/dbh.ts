import * as Bcrypt from 'bcrypt'

import MODELS from './models'

export default {
    addUser(payload: any): void {
        let bcryptPassword: string
        let saltRounds = 10

        Bcrypt.genSalt(saltRounds, function(err, salt) {
            Bcrypt.hash(payload.password, salt, function(err, hash) {
                bcryptPassword = hash
            });
        });

        // force: true will drop the table if it already exists
        MODELS.USER.sync({force: true}).then(() => {
        // Table created
            return MODELS.USER.create({
                firstName: payload.firstName,
                lastName: payload.lastName,
                email: payload.email,
                password: bcryptPassword,
                location: payload.location
            })
        })
    },
    updateUserLocation() { 
        // TODO
        // update the users locations each time they login via the web portal or phone
        // to accurately track their representation 
    }
}