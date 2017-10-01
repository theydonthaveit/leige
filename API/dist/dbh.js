"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bcrypt = require("bcrypt");
const SillyName = require("sillyname");
const models_1 = require("./models");
const utils_1 = require("./utils");
exports.default = {
    addUser(ipAddress, postCode, locale) {
        let generatedUsername;
        generatedUsername = SillyName();
        const USER = models_1.default.USER.sync({ force: false }).then(() => {
            models_1.default.USER.create({
                userName: generatedUsername,
                postCode: postCode,
                location: locale,
                ipAddress: ipAddress
            });
        });
        // TODO
        // If I want to do a redirect to "protect your account page" could wait for decision
        return USER.id;
    },
    protectYourProfile(payload, ipAddress) {
        let bcryptPassword;
        let saltRounds = 10;
        Bcrypt.genSalt(saltRounds, function (err, salt) {
            Bcrypt.hash(payload.password, salt, function (err, hash) {
                bcryptPassword = hash;
            });
        });
        models_1.default.USER.findOne({
            where: {
                ipAddress: ipAddress
            }
        }).then((user) => {
            user.update({
                mobile: payload.mobile,
                email: payload.email,
                password: bcryptPassword
            });
        });
    },
    buildYourProfile(payload, ipAddress) {
        // TODO
        // bcrypt the password or confirm password
        // plus additional fields
        models_1.default.USER.findOne({
            where: {
                ipAddress: ipAddress
            }
        }).then((user) => {
            user.update({
                firstName: payload.firstName,
                lastName: payload.lastName
            });
        });
    },
    createMatch(payload, ipAddressReq) {
        let valid = utils_1.default.validatePlayersLocations(payload.players);
        const USER = models_1.default.LIVEGAMES.sync({ force: true }).then(() => {
            models_1.default.LIVEGAMES.create({
                user_id: payload.user_id,
                match_name: payload.match_name,
                match_id: payload.match_id,
                players: payload.palyers,
                stream_url: payload.stream_url,
                region: valid.region,
                location_of_match: valid.location
            });
        });
    },
    // addGameToProfile(payload: any): void {
    //     // TODO
    //     // Add games you play to your profile plus associated account details
    //     MODELS.GAMESCLASS.findOne({
    //         where: {
    //             title: payload.gameTitle
    //         }
    //     }).then((game_id) => {
    //         MODELS.USER.findOne({
    //             where: {
    //                 userName: payload.userName
    //             }
    //         }).then((user) => {
    //             user.update({
    //                 games: game_id
    //             })
    //         })
    //     })
    // },
    createGame(payload) {
        // TODO
        // Create a game with all the requirements
    },
    addGameToLiveQueue(gameId) {
        // TODO
        // send ID of created game to LiveQueue database
    },
    updateUserLocation(ipAddress) {
        // TODO
        // CAN ONLY BE DONE WITH TOOLS LIKE PASSPORT INVOLVED
        // update the users locations each time they login via the web portal or phone
        // to accurately track their representation
        // send email or prompt to ask if it is you logging in from that location
    },
    addGamesToDatabase(payload, ipAddress) {
        ipAddress === '127.0.0.1'
            ? (models_1.default.GAMESCLASS.sync({ force: true }).then(() => {
                models_1.default.GAMESCLASS.create({
                    title: payload.gameTitle,
                    nameVariant: payload.nameVariant,
                    imageUri: payload.imageUri
                });
            }))
            : (null);
    }
};
//# sourceMappingURL=dbh.js.map