import * as tls from 'tls';
import * as Hapi from 'hapi';
// import * as Hapi_Passport from 'hapi-passport'
// import * as Strategy from 'passport-local'

import Handler from './handlers'

const SERVER: any = new Hapi.Server()

SERVER.connection({
    port: 3000,
    host: 'localhost'
})

SERVER.route({
    method: 'GET',
    path: '/gaming',
    handler: Handler.generate_base_profile
})
SERVER.route({
    method: 'POST',
    path: '/protect-gamer-profile',
    handler: Handler.protect_base_profile
})
SERVER.route({
    method: 'POST',
    path: '/build-gamer-profile',
    handler: Handler.build_base_profile
})
// TODO
// separate business actions from user action
SERVER.route({
    method: 'POST',
    path: '/add-games-to-system',
    handler: Handler.private_add_game_to_db
})

SERVER.start((err: string) => {
    if (err) {
        throw err;
    }

    console.log(`Server running at: ${SERVER.info.uri}`)
})

export default { SERVER }