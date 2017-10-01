"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GeoLocal = require("node-where");
const dbh_1 = require("./dbh");
exports.default = {
    // home: async function(req: any, res: any) {
    //     let session = req.state.session;
    //     if (!session) {
    //         session = { ipAddress: req.info.remoteAddress };
    //     }
    //     session.last = Date.now();
    //     await SessionDBH.storeSession(session)
    //
    //     return res('Success').state('session', session);
    // },
    generate_base_profile: function (req, res) {
        if (req.path.match('favicon')) {
            return res().code(204).type('image/x-icon');
        }
        let ipAddressReq = req.info.remoteAddress;
        let geoPostCodeRes;
        let geoAddressRes;
        GeoLocal.is(ipAddressReq, function (err, result) {
            if (result) {
                geoPostCodeRes = result.get('postalCode');
                geoAddressRes = result.get('city');
            }
            else {
                res("You have no location");
            }
        });
        let dbhUserName = dbh_1.default.addUser(ipAddressReq, geoPostCodeRes, geoAddressRes);
        res('This was successful');
    },
    protect_base_profile: function (req, res) {
        let ipAddressReq = req.info.remoteAddress;
        let dbhResp = dbh_1.default.protectYourProfile(req.payload, ipAddressReq);
        res(dbhResp);
    },
    build_base_profile: function (req, res) {
        let ipAddressReq = req.info.remoteAddress;
        let dbhResp = dbh_1.default.buildYourProfile(req.payload, ipAddressReq);
        res(dbhResp);
    },
    create_match: function (req, res) {
        let ipAddressReq = req.info.remoteAddress;
        let dbhResp = dbh_1.default.createMatch(req.payload, ipAddressReq);
        res(dbhResp);
    },
    // TO BE ADDED TO PRIVATE API
    private_add_game_to_db: function (req, res) {
        let ipAddressReq = req.info.remoteAddress;
        let dbhResp = dbh_1.default.addGamesToDatabase(req.payload, ipAddressReq);
        res(dbhResp);
    }
};
//# sourceMappingURL=handlers.js.map