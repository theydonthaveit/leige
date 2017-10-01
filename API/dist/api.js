"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Hapi = require("hapi");
// import * as Hapi_Passport from 'hapi-passport'
// import * as Strategy from 'passport-local'
const handlers_1 = require("./handlers");
const SERVER = new Hapi.Server();
SERVER.connection({
    port: 8080
});
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
    path: '/gaming',
    handler: handlers_1.default.generate_base_profile
});
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
    handler: handlers_1.default.protect_base_profile
});
SERVER.route({
    method: 'POST',
    path: '/build-gamer-profile',
    handler: handlers_1.default.build_base_profile
});
SERVER.route({
    method: 'POST',
    path: '/create-game',
    handler: handlers_1.default.create_match
});
SERVER.route({
    method: 'POST',
    path: '/create-challenge',
    handler: handlers_1.default.build_base_profile
});
SERVER.route({
    method: 'POST',
    path: '/create-team',
    handler: handlers_1.default.build_base_profile
});
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
    handler: handlers_1.default.private_add_game_to_db
});
SERVER.start((err) => {
    if (err) {
        throw err;
    }
    console.log(`Server running at: ${SERVER.info.uri}`);
});
//# sourceMappingURL=api.js.map