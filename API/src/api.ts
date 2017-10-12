import * as Hapi from 'hapi';
// import * as Hapi_Passport from 'hapi-passport'
// import * as Strategy from 'passport-local'

import Handler from './handlers'

const SERVER: any = new Hapi.Server()

SERVER.connection({
    port: 8080
})
// SERVER.state('session', {
//     ttl: 2 * 60 * 60 * 1000,
//     isSecure: true,
//     path: '/',
//     encoding: 'base64json'
// });

// SERVER.route({
//     method: 'GET',
//     path: '/',
//     handler: Handler.home
// })
SERVER.route({
    method: 'GET',
    path: '/',
    handler: Handler.generate_base_profile
})
SERVER.route({
    method: 'GET',
    path: '/retrieve_game_images',
    handler: Handler.game_images
})

// QUERY
// SERVER.route({
//     method: 'GET',
//     path: '/find-game',
//     handler: Handler.build_base_profile
// })
// SERVER.route({
//     method: 'GET',
//     path: '/find-player',
//     handler: Handler.build_base_profile
// })
// SERVER.route({
//     method: 'GET',
//     path: '/find-team',
//     handler: Handler.build_base_profile
// })

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

SERVER.route({
    method: 'POST',
    path: '/create-game',
    handler: Handler.create_match
})
SERVER.route({
    method: 'POST',
    path: '/create-challenge',
    handler: Handler.build_base_profile
})
SERVER.route({
    method: 'POST',
    path: '/create-team',
    handler: Handler.build_base_profile
})

// DECIDE HOW THIS SHOULD BE HANDLED
// SERVER.route({
//     method: 'POST',
//     path: '/invite-to-game',
//     handler: Handler.build_base_profile
// })
// SERVER.route({
//     method: 'POST',
//     path: '/invite-to-team',
//     handler: Handler.build_base_profile
// })

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
