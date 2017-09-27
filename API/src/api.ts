import * as Hapi from 'hapi'
// import * as Hapi_Passport from 'hapi-passport'
// import * as Strategy from 'passport-local'

import DBH from './dbh'

const SERVER = new Hapi.Server()

SERVER.connection({
    port: 3000,
    host: 'localhost'
})

SERVER.route({
    method: 'POST',
    path: '/create-profile',
    handler: function (request: any, reply: any) {
        let dbhResp = DBH.addUser(request.payload)
        reply("You've been added to the DB")
    }
})

SERVER.start((err: string) => {
    if (err) {
        throw err;
    }

    console.log(`Server running at: ${SERVER.info.uri}`)
})